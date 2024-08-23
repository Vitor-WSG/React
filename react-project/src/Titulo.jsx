import React from 'react'

//RECEBENDO PROPS DESESTRUTURADAS
// const Titulo = ({color,titulo}) => {
//   return (
//     <>
//       <h1 style={{color: color }}>{titulo}</h1>
//     </>
//   )
// }


//RECEBENDO VIA PROPS
const Titulo = (props) => {
  return (
    <>
      <h1 style={{color: props.color }}>{props.titulo}</h1>
    </>
  )
}

export default Titulo