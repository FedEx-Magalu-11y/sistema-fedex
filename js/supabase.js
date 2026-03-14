const SUPABASE_URL = "https://opiwznepfjcinxrymrxw.supabase.co"
const SUPABASE_KEY = "sb_publishable_F7z4q7UuxxNc13r4rDubZA_LsFF1fEB"

window.db = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)
