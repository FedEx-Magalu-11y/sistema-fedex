const params = new URLSearchParams(window.location.search)

const code = params.get("code")

async function carregar(){

const {data} = await supabase
.from("trackings_test")
.select("*")
.eq("code",code)
.single()

document.getElementById("codigo").innerText=data.code

document.getElementById("destinatario").innerText=data.recipient_name

document.getElementById("endereco").innerText=data.address

const timeline=document.getElementById("timeline")

timeline.innerHTML=""

data.timeline.forEach(t=>{

timeline.innerHTML+=`

<div>

<b>${t.status}</b><br>
${t.location}<br>
${new Date(t.date).toLocaleDateString()}

</div>

`

})

}

carregar()
