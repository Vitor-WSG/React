import React from 'react'
import InputVendas from './components/InputVendas'

type Vendas = {
  nome: string,
  status: string
}

export default function App() {
  const [inicio, setInicio] = React.useState("")
  const [final, setFinal] = React.useState("")
  const [data, setData] = React.useState<null | Vendas[]>(null)

  function requestVendas() {
    fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
      .then((r) => r.json())
      .then((r) => setData(r as Vendas[]))
      .catch((err) => console.error('Error:', err))
  }



  React.useEffect(() => {
    if (inicio !== "" && final !== "") {
      requestVendas()
    }
  }, [inicio, final])

  return (<>

    <InputVendas label="inicio" type="date" value={inicio} setState={setInicio} />
    <p></p>
    <InputVendas label="final" type="date" value={final} setState={setFinal} />
    <p></p>
    <h2>Total de registros: {data?.length}</h2>

    <ul>
      {data &&
        data.map((r) => (
          <li style={{ color: r.status === "pago" ? "green":"blue" }}> Nome: {r.nome} - Situação: {r.status}</li>
        ))
      }
    </ul>

  </>)

}