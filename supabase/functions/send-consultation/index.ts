import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    const {
      name,
      email,
      phone,
      propertyAddress,
      consultationType,
      message,
    }: ConsultationRequest = await req.json();

    console.log("Processing consultation request for:", email);

    // Format consultation type for display
    const consultationTypeDisplay =
      consultationType === "both"
        ? "Both Selling & Buying"
        : consultationType.charAt(0).toUpperCase() + consultationType.slice(1);

    // Email to Dylan
    const adminEmailResponse = await resend.emails.send({
      from: "Dylan Sells FL <onboarding@resend.dev>",
      to: ["dylan@dylansellsfloridahomes.com"],
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #708238;">New Consultation Request</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${propertyAddress ? `<p><strong>Property Address:</strong> ${propertyAddress}</p>` : ""}
          </div>

          <div style="background-color: #e8f0e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Consultation Details</h2>
            <p><strong>Interested In:</strong> ${consultationTypeDisplay}</p>
            ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ""}
          </div>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This request was submitted through your website consultation form.
          </p>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Auto-reply to user
    const userEmailResponse = await resend.emails.send({
      from: "Dylan Sells FL <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Consultation Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #708238;">Thank You for Your Request!</h1>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out! I've received your consultation request and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">What You Requested</h2>
            <p><strong>Consultation Type:</strong> ${consultationTypeDisplay}</p>
            ${propertyAddress ? `<p><strong>Property:</strong> ${propertyAddress}</p>` : ""}
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

    console.log("User confirmation email sent:", userEmailResponse);

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
