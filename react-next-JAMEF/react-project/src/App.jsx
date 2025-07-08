import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pessoa, setPessoa] = useState({ nome: "Vitor", idade: 30 });
  const [users, setUsers] = useState(null);

  // useEffect(() => {
  //   getUsers2();
  // }, []);

  async function getUsers() {
    const usersGet = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await usersGet.json();
    return res;
  }

  async function getUsers2() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((r) => {setUsers(r), console.log(r)})
      .catch((error) => console.log(error));
  }

  function alteraPessoa() {
    return setPessoa({ nome: "Alex Green", idade: 33 });
  }

  return (
    <>
      <h3>{pessoa.nome}</h3>
      <h3>{pessoa.idade}</h3>

      <h1>Usuarios</h1>
      {users &&
        users.map((res) => (
          <ul>
            <li key={res.id}>{res.name} - {res.username} </li>
          </ul>
        ))}

      <button onClick={alteraPessoa}>Altera Pessoa</button>
      <button onClick={getUsers2}>Request Users</button>
    </>
  );
}

export default App;
