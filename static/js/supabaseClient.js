import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://opiwznepfjcinxrymrxw.supabase.co"
const supabaseKey = "sb_publishable_F7z4q7UuxxNc13r4rDubZA_LsFF1fEB"

export const supabase = createClient(supabaseUrl, supabaseKey)
