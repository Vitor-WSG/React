import Link from "next/link"
import { getCursos } from "@/api/cursos"

export default async function CursosPage() {
  const formacoes = await getCursos()

  return (<>
    <h1>Escolha o seu curso:</h1>
    <ul>
      {formacoes && formacoes.map((res) => (
        <li key={res.id}>
          <Link href={`/cursos/${res.slug}`} prefetch={true}>{res.nome}</Link>
        </li>
      ))}
    </ul>
  </>)
}