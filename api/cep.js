export default async function handler(req, res) {

try{

const cep = req.query.cep

if(!cep){
return res.status(400).json({erro:"CEP não informado"})
}

const response = await fetch(
"https://api-core.theretech.com.br/geo/cep?cep="+cep,
{
headers:{
"X-API-Key":"0d5ac812-78ac-4e06-863a-e7532adb81c8.ROLMFYY7SFI7MUQFCZANY4QJEVMDM7FX"
}
}
)

const text = await response.text()

let data

try{
data = JSON.parse(text)
}catch{
return res.status(500).json({
erro:"API retornou texto inválido",
resposta:text
})
}

res.status(200).json(data)

}catch(error){

res.status(500).json({
erro:"Erro interno",
detalhe:error.message
})

}

}
