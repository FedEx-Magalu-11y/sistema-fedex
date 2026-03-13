async function criar(){

const code=document.getElementById("codigo").value

const nome=document.getElementById("nome").value

const endereco=document.getElementById("endereco").value

await supabase
.from("trackings_test")
.insert({

code:code,
recipient_name:nome,
address:endereco,
timeline:[{
status:"Postado",
location:"Centro Logístico",
date:new Date()
}]

})

alert("Criado")

listar()

}

async function listar(){

const {data}=await supabase
.from("trackings_test")
.select("*")

const lista=document.getElementById("lista")

lista.innerHTML=""

data.forEach(t=>{

lista.innerHTML+=`

<div>

${t.code}

<button onclick="copiar('${t.code}')">Copiar link</button>

<button onclick="excluir('${t.id}')">Excluir</button>

</div>

`

})

}

function copiar(code){

navigator.clipboard.writeText(
window.location.origin+"/rastreamento.html?code="+code
)

alert("Link copiado")

}

async function excluir(id){

await supabase
.from("trackings_test")
.delete()
.eq("id",id)

listar()

}

listar()
