
-- Fix 1: Remove permissive INSERT on form_submissions (edge function uses service_role which bypasses RLS)
DROP POLICY IF EXISTS "Edge functions can insert form submissions" ON public.form_submissions;

-- Fix 2: Remove permissive INSERT on newsletter_subscribers (will be replaced by edge function)
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;
