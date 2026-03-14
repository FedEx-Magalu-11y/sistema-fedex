const params=new URLSearchParams(window.location.search)

const code=params.get("code")

async function carregar(){

const {data}=await db
.from("trackings_test")
.select("*")
.eq("code",code)
.single()

if(!data){

document.body.innerHTML="Código não encontrado"

return

}

document.querySelector(".tracking-code").innerText=data.code

document.querySelector(".recipient-name").innerText=data.recipient_name

document.querySelector(".recipient-address").innerText=data.address

const timeline=document.querySelector(".tracking-timeline")

timeline.innerHTML=""

data.timeline.forEach((t,i)=>{

timeline.innerHTML+=`

<div class="timeline-item ${i==data.timeline.length-1?"active":""}">

<div class="timeline-dot"></div>

<div class="timeline-content">

<div class="timeline-date">

${new Date(t.date).toLocaleString("pt-BR")}

</div>

<div class="timeline-status">

${t.title}

</div>

<div class="timeline-description">

${t.description}

</div>

<div class="timeline-location">

${t.location}

</div>

</div>

</div>

`

})

}

carregar()
