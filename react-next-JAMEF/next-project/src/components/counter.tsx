'use client' 
//Necessario colocar para que seja usado do cliente

import React from 'react'

export default function Counter() {

  const [count,setCounter] = React.useState(0)

  function countSet() {
    return setCounter(count+1)
  }
  return (
    <>
    <button onClick={countSet}>Increase</button>
      <h1>contador = {count}</h1>
    </>
  )
}