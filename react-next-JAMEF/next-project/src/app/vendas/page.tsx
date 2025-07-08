type Vendas = {
  nome:string,
  id: number | string,
  status?:string
}

const page = async () => {
  const html = 'https://data.origamid.dev/vendas/'
  const request = await fetch(html)
  const response = await request.json() as Vendas[]

  return (
    <div>
      <h1>Vendas por periodo</h1>
      <p>Total de registros: {response.length}</p>
      <ul>
        {response && response.map((res) => (<li key={res.id}> { res.nome }</li>))}
    </ul>
    </div >
  )
}

export default page
