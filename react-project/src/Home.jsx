import React from 'react'
import Titulo from './Titulo'

const Home = () => {
  return (
    <div style={{fontSize:'25PX', fontWeight:'bold'}}>
      <Titulo color='green' titulo="Home"/>
      <p>Essa é a pagina home do site</p>
    </div>
  )
}

export default Home
