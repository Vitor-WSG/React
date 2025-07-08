type PageParams = {
  params: {
    codigo: string
  }
}

type Produto = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  estoque: number,
  importado: number
}

export default async function Produto({ params }: PageParams) {

  const request = await fetch(`https://api.origamid.online/produtos/${params.codigo}`)
  if (!request.ok) {
    throw new Error(`Erro ao buscar produto: ${request.status}`)
  }
  const response = await request.json() as Produto


  return (<>
    <h1>Produto</h1>
    <p>{response.nome}</p>
  </>)
}