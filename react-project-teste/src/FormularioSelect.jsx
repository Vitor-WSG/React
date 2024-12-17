import React from "react";
const FormularioSelect = () => {
  const [produtos, setProdutos] = React.useState("");
  const arrProdutos = ["Notebook", "Tablet", "SmartPhone", "AirPods"];

  return (
    <>
      <select
        value={produtos}
        onChange={({ target }) => setProdutos(target.value)}
      >
        <option value="" disabled>
          Selecione
        </option>
        {arrProdutos.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      {produtos}
    </>
  );
};

// const FormularioSelect = () => {
//   const [produtos, setProdutos] = React.useState("");

//   return (
//     <>
//       <select
//         value={produtos}
//         onChange={({ target }) => setProdutos(target.value)}
//       >
//         <option value="" disabled>
//           Selecione
//         </option>
//         <option value="notebook">Notebook</option>
//         <option value="smartphone">SmartPhone</option>
//         <option value="tablet">Tablet</option>
//       </select>
//       {produtos}
//     </>
//   );
// };

export default FormularioSelect;
