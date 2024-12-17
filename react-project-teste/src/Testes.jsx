import React from 'react'
import UserContext from './userContext'

const Testes = () => {
  const user = React.useContext(UserContext)
  return (
    <div>
      <p>Compomente de teste disponivel:{user.nome}</p>
      <p>Compomente de teste disponivel:{user.idade}</p>
    </div>
  )
}

export default Testes