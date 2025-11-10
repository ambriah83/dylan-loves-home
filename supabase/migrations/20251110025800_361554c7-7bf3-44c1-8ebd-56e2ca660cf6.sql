-- Fix function search path for cleanup_old_submissions
DROP FUNCTION IF EXISTS public.cleanup_old_submissions();

CREATE OR REPLACE FUNCTION public.cleanup_old_submissions()
RETURNS void 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.form_submissions 
  WHERE submitted_at < now() - interval '24 hours';
END;
$$;