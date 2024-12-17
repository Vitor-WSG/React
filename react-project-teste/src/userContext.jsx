import React from "react";

export const GlobalContext = React.createContext()

export function GlobalStorage ({children}){
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect( ()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then((r)=> r.json())
    .then((r)=> setProdutos(r))
  },[])

  return (
    <GlobalContext.Provider value={{produtos}} >
      {children}
    </GlobalContext.Provider>
  )
}