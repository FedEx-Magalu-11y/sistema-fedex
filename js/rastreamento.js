const params = new URLSearchParams(window.location.search)

const code = params.get("code")

async function carregar(){

const { data, error } = await supabase
.from("trackings_test")
.select("*")
.eq("code", code)
.single()

if(error || !data){

document.body.innerHTML="Código não encontrado"

return

}

document.getElementById("codigo").innerText = data.code

document.getElementById("destinatario").innerText = data.recipient_name

document.getElementById("endereco").innerText = data.address


const timeline = document.getElementById("timeline")

timeline.innerHTML = ""


data.timeline.forEach((t,i)=>{

timeline.innerHTML += `

<div class="timeline-item ${i==data.timeline.length-1 ? "active":""}">

<div class="timeline-dot"></div>

<div class="timeline-content">

<div class="timeline-date">
${new Date(t.date).toLocaleString("pt-BR")}
</div>

<div class="timeline-status">
${t.status}
</div>

<div class="timeline-description">
${t.description || ""}
</div>

<div class="timeline-location">
${t.location}
</div>

<div class="timeline-sector">
Setor: ${t.sector || ""}
</div>

</div>

</div>

`

})

}

carregar()
