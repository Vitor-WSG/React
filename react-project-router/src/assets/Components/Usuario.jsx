import { useEffect } from "react";
const Usuario = () => {
  useEffect(() => {
    console.log("Teste de UseEffect executado");
  },[]);
  return (
    <>
      <h2>Seja bem vindo usuario</h2>
    </>
  );
};

export default Usuario;
