import React from "react";

const FormularioRadio = () => {
  const [radioForm, setRadioForm] = React.useState();
  const arrCores = ["vermelho", "azul", "verde", "preto", "amarelo", "cinza", "roxo"];

  function handleChange({ target }) {
    setRadioForm(target.value);
  }

  return (
    <>
      {arrCores.map((r) => (
        <label style={{ textTransform: "capitalize" }} key={r}>
          <input
            type="radio"
            value={r}
            checked={radioForm === r}
            onChange={handleChange}
          />
          {r}
        </label>
      ))}
      {radioForm}
    </>
  );
};

export default FormularioRadio;
