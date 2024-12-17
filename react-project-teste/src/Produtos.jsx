import React from 'react'
import { GlobalContext } from './userContext'

const Produtos = () => {
  const global = React.useContext(GlobalContext)
  console.log(global)

  if(global.produtos === null) return null

  return (
    <div>
      Produto:{global.dados[0].nome}
    </div>
  )
}

export default Produtos
