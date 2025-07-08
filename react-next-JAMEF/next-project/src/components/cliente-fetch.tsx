'use client'
import React from 'react'
type Usuario = {
  name: string,
  email: string,
  id: number
}

export default function ClienteFetch(){
  const [users, setUsers] = React.useState<Usuario[]>([])

  async function getUsers () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return setUsers(data)
  }

  React.useEffect(()=>{
    getUsers()
  },[])
  return(<>
      <h3>Use Clients</h3>
      <ul>
        {users && users.map((r)=>(<li key={r.id}>{r.name} - {r.email}</li>))}
      </ul>
  </>)
}