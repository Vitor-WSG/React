import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto'

const listaProdutos = [
  {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
  {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']}
]


const Produtos = (props) => {
  return (
    <div style={{fontSize:'25PX', fontWeight:'bold'}}>
      <Titulo color='green' titulo="Produtos"/>
      {listaProdutos.map((res)=> 
      <Produto key={res.nome} {...res}/>
      )}
    </div>
  )
}

export default Produtos