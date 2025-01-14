import React from "react";
import UsuariosCadastro from "./UsuariosCadastro";
import UsuariosList from "./UsuariosList";
import FormularioInput from "./FormularioInput";
import FormularioSelect from "./FormularioSelect";
import FormularioRadio from "./FormularioRadio";
import DesafioFormulario from "./DesafioFormulario";
import NewUser from "./TesteAPI/NewUser";
import TokenUser from "./TesteAPI/TokenUser";
import NewPhoto from "./TesteAPI/NewPhoto";
import GetPhoto from "./TesteAPI/GetPhoto";

function App() {
  return (
    <div>
      <FormularioInput />
      {/* <NewUser />
      <br />
      <TokenUser />
      <br />
      <NewPhoto />
      <br />
      <GetPhoto /> */}
    </div>
  );
}

export default App;
