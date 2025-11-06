import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  propertyAddress: z.string().trim().max(500, "Address must be less than 500 characters").optional(),
  consultationType: z.enum(["selling", "buying", "both"], {
    required_error: "Please select a consultation type",
  }),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const consultationType = watch("consultationType");

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-consultation", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your consultation request has been sent. We'll get back to you soon!",
      });
      reset();
    } catch (error) {
      console.error("Error sending consultation:", error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your full name"
          className="w-full"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyAddress">Property Address</Label>
        <Input
          id="propertyAddress"
          {...register("propertyAddress")}
          placeholder="123 Main St, Tampa, FL 33601"
        />
        {errors.propertyAddress && (
          <p className="text-sm text-destructive">{errors.propertyAddress.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <Label>I'm interested in *</Label>
        <RadioGroup
          value={consultationType}
          onValueChange={(value) => setValue("consultationType", value as "selling" | "buying" | "both")}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="selling" id="selling" />
            <Label htmlFor="selling" className="font-normal cursor-pointer">
              Selling a property
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="buying" id="buying" />
            <Label htmlFor="buying" className="font-normal cursor-pointer">
              Buying a property
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="both" />
            <Label htmlFor="both" className="font-normal cursor-pointer">
              Both selling and buying
            </Label>
          </div>
        </RadioGroup>
        {errors.consultationType && (
          <p className="text-sm text-destructive">{errors.consultationType.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us more about your needs..."
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? "Sending..." : "Request Free Consultation"}
      </Button>
    </form>
  );
}
