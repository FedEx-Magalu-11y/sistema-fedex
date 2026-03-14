export default async function handler(req, res) {

try {

const cep = req.query.cep

if(!cep){
return res.status(400).json({ erro: "CEP não informado" })
}

const response = await fetch(
`https://api-core.theretech.com.br/cep/${cep}`,
{
headers:{
"X-API-Key":"afdb43b6-8144-49b5-b6ff-b9f484b30b8a.X65WTYTZ5MZSD6Z74BJTNYB5VJBPSTGD"
}
}
)

const data = await response.json()

// retorna tudo que a API mandar
res.status(200).json(data)

}catch(error){

res.status(500).json({
erro:"Erro interno",
detalhe:error.message
})

}

}
