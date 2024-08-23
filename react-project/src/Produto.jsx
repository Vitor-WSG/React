import React from 'react'

//RECEBENDO PROPS DESESTRUTURADA
const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border:'1px solid', margin:'10px', fontSize:'25PX', fontWeight:'bold'}}>
      <ul>
        <span>{nome}</span>
        <ul>
          {propriedades.map((r)=> <li key={r}>{r}</li>)}  
        </ul>

      </ul>
    </div>
  )
}

export default Produto
