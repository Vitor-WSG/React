type Usuarios = {
  name: string;
  email: string;
  id: number
}

export default async function Usuarios() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json() as Usuarios[]
  console.log(data)
  return <>
    <h1>Pagina de Usuarios</h1>
    <ul>
      {data.map((r)=>(
        <li key={r.id}> {r.name} - {r.email}</li>
        ))}
    </ul>
  </>
}