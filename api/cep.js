export default async function handler(req, res) {

const cep = req.query.cep

const response = await fetch(
"https://api-core.theretech.com.br/geo/cep/"+cep,
{
headers:{
"X-API-Key":"0d5ac812-78ac-4e06-863a-e7532adb81c8.ROLMFYY7SFI7MUQFCZANY4QJEVMDM7FX"
}
}
)

const data = await response.json()

res.status(200).json(data)

}
