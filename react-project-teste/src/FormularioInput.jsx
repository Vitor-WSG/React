import React from "react";

const FormularioInput = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const arrFormulario = [
    { label: "nome", value: form.nome },
    { label: "email", value: form.email },
    { label: "telefone", value: form.telefone },
  ];

  function handleChange(event) {
    setForm({ ...form, [event.target.id]: event.target.value });
  }

  function sendFormulario(event) {
    event.preventDefault();
    const { nome, email, telefone } = form;
    console.log(nome, email, telefone);
  }

  return (
    <>
      <section>
        <form onSubmit={sendFormulario}>
          {arrFormulario.map(({ label, value }) => (
            <div key={label}>
              <label htmlFor={label} style={{ textTransform: "capitalize" }}>
                {label}
              </label>
              <input
                type="text"
                id={label}
                value={value}
                onChange={handleChange}
              />
            </div>
          ))}
          <button>Enviar</button>
        </form>
      </section>
    </>
  );
};

// const FormularioInput = () => {
//   const [nome, setNome] = React.useState(null);
//   const [email, setEmail] = React.useState(null);
//   const [telefone, setTelefone] = React.useState(null);

//   function enviarFormulario(event) {
//     event.preventDefault();
//     console.log("Nome:", nome, "Email:", email, "Telefone:", telefone);
//   }

//   return (
//     <>
//       <sectio>
//         <form onSubmit={enviarFormulario}>
//           <label htmlFor="nome">Nome:</label>
//           <input
//             type="text"
//             id="nome"
//             value={nome}
//             onChange={({ target }) => setNome(target.value)}
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={({ target }) => setEmail(target.value)}
//           />

//           <label htmlFor="telefone">Telefone:</label>
//           <input
//             type="text"
//             id="telefone"
//             value={telefone}
//             onChange={({ target }) => setTelefone(target.value)}
//           />

//           <button style={{ margin: "20px" }}>Enviar</button>
//         </form>
//       </sectio>
//     </>
//   );
// };

export default FormularioInput;
