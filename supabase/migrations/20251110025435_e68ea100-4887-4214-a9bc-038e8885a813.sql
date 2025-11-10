-- Fix newsletter_subscribers RLS policy to prevent public email exposure
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.newsletter_subscribers;

-- Create table for rate limiting form submissions
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on form_submissions (no public access needed)
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create index for efficient rate limiting queries
CREATE INDEX IF NOT EXISTS idx_form_submissions_ip_endpoint_time 
ON public.form_submissions (ip_address, endpoint, submitted_at DESC);

-- Create function to clean up old submission records (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_submissions()
RETURNS void AS $$
BEGIN
  DELETE FROM public.form_submissions 
  WHERE submitted_at < now() - interval '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;