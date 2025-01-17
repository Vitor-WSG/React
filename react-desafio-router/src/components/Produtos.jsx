import React from 'react'
import { Link } from 'react-router-dom'

const Produtos = () =>{
  const [produtos, setProdutos] = React.useState(null)

  async function requestProdutos(){
    const produtos = await fetch('https://ranekapi.origamid.dev/json/api/produto')
    const res = await produtos.json()
    setProdutos(res)
  }

  React.useEffect(()=>{
    requestProdutos()
  },[])
  if(produtos === null) return null 
  return (
    <>
      <h1>Componente de produtos works</h1>
      {produtos.map((r)=>(
        <Link to={`/produto/${r.id}`} key={r.id}>
          <img src={r.fotos[0].src} alt={r.fotos[0].titulo}/>
          <h2>{r.nome}</h2>
        </Link>
      ))}
    </>
  )
}

export default Produtos