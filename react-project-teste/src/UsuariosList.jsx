import React from "react";
import styles from "./UsuariosList.module.css";

const UsuariosList = () => {
  const tabela = {
    border: "2px solid black",
    letterSpacing: "1px",
    borderCollapse: "collapse",
    padding: "10px",
    backgroundColor: "#ccc",
    fontFamily: "sans-serif",
    textAlign: "left",
  };

  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});
  const arrFormulario = [
    { label: "Nome", value: user.name },
    { label: "Email", value: user.email },
    { label: "Telefone", value: user.phone },
    { label: "Site", value: user.website },
    { label: "Endereço", value: user.address?.street },
  ];

  function fecharDetalhes() {
    const tela = document.getElementById("telaDetalhes");
    tela.style.display = "none";
  }

  function abrirDetalhes(obj) {
    const tela = document.getElementById("telaDetalhes");
    tela.style.display = "block";
    setUser(obj);
  }

  async function requestUsers() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    setUsers(response);
  }

  React.useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div>
      <section>
        <div className={{ width: "100%" }}>
          <table className={tabela}>
            <thead>
              <tr>
                <th className={tabela}>Nome</th>
                <th className={tabela}>Email</th>
                <th className={(tabela, { textAlign: "center" })} colSpan={2}>
                  Ação
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((r) => (
                <tr key={r.id}>
                  <td className={tabela}>{r.name}</td>
                  <td className={tabela}>{r.email}</td>
                  <td className={tabela}>
                    <button className={estiloBtnExcluir}>Excluir</button>
                  </td>
                  <td className={tabela}>
                    <button
                      onClick={() => abrirDetalhes(r)}
                      className={estiloOpenDetalhe}
                    >
                      Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className={{ color: "white", marginTop: "30px" }}>
            Adicionar novo
          </button>
        </div>

        <div id="telaDetalhes" className={{ width: "100%" }}>
          <section className={{ border: "2px solid black ", padding: "20px" }}>
            <h2>Detalhes:</h2>

            <ul>
              {arrFormulario.map(({ label, value }) => (
                <li key={label} className={{ fontWeight: "bold" }}>
                  {label}: {value}
                </li>
              ))}
            </ul>

            <button onClick={fecharDetalhes} className={estiloBtnDetalhe}>
              Fechar
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default UsuariosList;
