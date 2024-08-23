import Home from "./Home"
import Produtos from "./Produtos"
import Header from "./Header"
import Titulo from "./Titulo"
import {useState} from 'react'


const App = () =>{

  const [pessoa,setPessoa] = useState({nome:'Vitor', idade:33})
  function alteraPessoa () {
    return setPessoa({nome:'Joao', idade:22, faculdade: 'Sim'})
  }

  const [ativo, setAtivo] = useState(false)
  function alteraAtivo () {
    return setAtivo(!true)
  }

  const [actived, setActived] = useState(true)
  function alteraActived () {
    return setActived((anterior)=>!anterior)
  }


  return (
    <>
      <button onClick={alteraActived}>{actived ? 'Ativado':'Desativado'}</button>


      <h2>{ativo}</h2>
      <button onClick={alteraAtivo}>Altera ativo</button>


      <button onClick={alteraPessoa}>Altera Pessoa</button>
      <p>
        {pessoa.nome} 
      </p>
      <p>
        {pessoa.idade} 
      </p>
      <p>
        {pessoa.faculdade} 
      </p>
    </>
  )

  // function PaginaTitulo (arg) {
  //   const tituloPagina = {
  //     '/':Home,
  //     '/produtos': Produtos,
  //     default: 'Pagina não encontrada'
  //   }
  //   return tituloPagina[arg] || tituloPagina.default
  // }

  // let Pagina = PaginaTitulo(window.location.pathname)

  // return (
  // <>
  //   <Header/>
  //   <Titulo/>
  //   <Pagina/>
  // </>)
}

export default App