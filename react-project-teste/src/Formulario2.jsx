import React from "react";

const Formulario2 = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [response, setResponse] = React.useState(null)

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  }

  async function onHandleSubmit(event) {
    event.preventDefault();
    const request = await fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(form)
    })
    const res = request.json()
    setResponse(res)
  }
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">senha:</label>
        <input
          type="text"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">cep:</label>
        <input type="text" id="cep" value={form.cep} onChange={handleChange} />

        <label htmlFor="rua">rua:</label>
        <input type="text" id="rua" value={form.rua} onChange={handleChange} />

        <label htmlFor="numero">numero:</label>
        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">bairro:</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">cidade:</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">estado:</label>
        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />

        <button style={{ margin: "20px" }}>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario2;
