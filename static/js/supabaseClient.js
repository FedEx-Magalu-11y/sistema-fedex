import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://opiwznepfjcinxrymrxw.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waXd6bmVwZmpjaW54cnltcnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4OTQ3MDQsImV4cCI6MjA4ODQ3MDcwNH0.bcfSAqQzPNs1BISoKBUP2p1KU0MIgCzFimX4OzhU0yU"

export const supabase = createClient(supabaseUrl, supabaseKey)
