import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const FOLLOWUP_BOSS_API_KEY = Deno.env.get("FOLLOWUP_BOSS_API_KEY");

// Initialize Supabase client for rate limiting
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Input validation schema
const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone too long"),
  propertyAddress: z.string().trim().max(500, "Address too long").optional(),
  consultationType: z.enum(["selling", "buying", "both"], {
    errorMap: () => ({ message: "Invalid consultation type" }),
  }),
  message: z.string().trim().max(2000, "Message too long").optional(),
});

// HTML escaping to prevent email template injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  email: string;
  phone: string;
  propertyAddress?: string;
  consultationType: "selling" | "buying" | "both";
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const body = await req.json();
    const validationResult = consultationSchema.safeParse(body);

    if (!validationResult.success) {
      console.log("Validation failed:", validationResult.error.issues);
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: validationResult.error.issues.map((i) => i.message),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, propertyAddress, consultationType, message } =
      validationResult.data;

    // Get client IP for rate limiting
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit: max 5 submissions per hour per IP
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from("form_submissions")
      .select("id")
      .eq("ip_address", clientIp)
      .eq("endpoint", "send-consultation")
      .gte("submitted_at", oneHourAgo);

    if (rateLimitError) {
      console.error("Rate limit check failed:", rateLimitError);
    } else if (recentSubmissions && recentSubmissions.length >= 5) {
      console.log("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({
          error: "Too many requests",
          details: "Please wait before submitting another consultation request",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Record this submission for rate limiting
    await supabase.from("form_submissions").insert({
      ip_address: clientIp,
      endpoint: "send-consultation",
      submitted_at: new Date().toISOString(),
    });

    console.log("Processing consultation request");

    // Format consultation type for display
    const consultationTypeDisplay =
      consultationType === "both"
        ? "Both Selling & Buying"
        : consultationType.charAt(0).toUpperCase() + consultationType.slice(1);

    // Email to Dylan (with sanitized user input)
    const adminEmailResponse = await resend.emails.send({
      from: "Dylan Sells FL <onboarding@resend.dev>",
      to: ["dylan@dylansellsfloridahomes.com"],
      subject: `New Consultation Request from ${escapeHtml(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #708238;">New Consultation Request</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
            ${propertyAddress ? `<p><strong>Property Address:</strong> ${escapeHtml(propertyAddress)}</p>` : ""}
          </div>

          <div style="background-color: #e8f0e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Consultation Details</h2>
            <p><strong>Interested In:</strong> ${escapeHtml(consultationTypeDisplay)}</p>
            ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${escapeHtml(message)}</p>` : ""}
          </div>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This request was submitted through your website consultation form.
          </p>
        </div>
      `,
    });

    console.log("Admin email sent successfully");

    // Auto-reply to user (with sanitized user input)
    const userEmailResponse = await resend.emails.send({
      from: "Dylan Sells FL <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Consultation Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #708238;">Thank You for Your Request!</h1>
          
          <p>Hi ${escapeHtml(name)},</p>
          
          <p>Thank you for reaching out! I've received your consultation request and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">What You Requested</h2>
            <p><strong>Consultation Type:</strong> ${escapeHtml(consultationTypeDisplay)}</p>
            ${propertyAddress ? `<p><strong>Property:</strong> ${escapeHtml(propertyAddress)}</p>` : ""}
          </div>

          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Browse my recent sales and listings</li>
            <li>Check out staging tips on the blog</li>
            <li>Call or text me directly at <strong>(555) 123-4567</strong></li>
          </ul>

          <p style="margin-top: 30px;">Looking forward to helping you with your real estate goals!</p>
          
          <p style="margin-top: 20px;">
            <strong>Dylan</strong><br>
            Tampa Bay Real Estate Expert<br>
            Dylan Sells FL
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 12px;">
            If you have any immediate questions, feel free to reply to this email or call me directly.
          </p>
        </div>
      `,
    });

    console.log("User confirmation email sent successfully");

    // Send lead to Follow Up Boss CRM
    if (FOLLOWUP_BOSS_API_KEY) {
      try {
        // Determine tags based on consultation type
        const tags: string[] = ["Website Lead"];
        if (consultationType === "selling" || consultationType === "both") {
          tags.push("Seller Lead");
        }
        if (consultationType === "buying" || consultationType === "both") {
          tags.push("Buyer Lead");
        }

        // Create the person in Follow Up Boss
        const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
          method: "POST",
          headers: {
            "Authorization": `Basic ${btoa(FOLLOWUP_BOSS_API_KEY + ":")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: name.split(" ")[0],
            lastName: name.split(" ").slice(1).join(" ") || "",
            emails: [{ value: email, isPrimary: true }],
            phones: [{ value: phone, isPrimary: true }],
            tags: tags,
            source: "dylansellsfloridahomes.com",
            ...(propertyAddress && {
              addresses: [{ 
                value: propertyAddress, 
                type: "home" 
              }]
            }),
            ...(message && {
              notes: [{
                subject: `Consultation Request - ${consultationTypeDisplay}`,
                body: message
              }]
            }),
          }),
        });

        if (fubResponse.ok) {
          console.log("Lead successfully sent to Follow Up Boss");
        } else {
          const errorData = await fubResponse.text();
          console.error("Follow Up Boss API error:", fubResponse.status, errorData);
        }
      } catch (fubError) {
        console.error("Error sending to Follow Up Boss:", fubError);
        // Don't fail the request if FUB fails - email was still sent
      }
    } else {
      console.log("FOLLOWUP_BOSS_API_KEY not configured, skipping CRM sync");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Consultation request sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-consultation function:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        details: "Failed to send consultation request",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
