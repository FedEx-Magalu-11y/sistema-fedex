import { supabase } from "./supabaseClient.js"

export async function buscar(codigo){

const { data, error } = await supabase
.from("tracking_events")
.select("*")
.eq("codigo", codigo)
.order("data", { ascending:false })

return data

}
