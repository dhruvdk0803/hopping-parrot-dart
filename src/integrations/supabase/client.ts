import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://rqyxsjymgasukdlpheqm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxeXhzanltZ2FzdWtkbHBoZXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNzQ1NDQsImV4cCI6MjA4OTc1MDU0NH0.KQDgG4nSP4bcv7_wLZwpjRFAzmwgGfv3xDTphv6NdEw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);