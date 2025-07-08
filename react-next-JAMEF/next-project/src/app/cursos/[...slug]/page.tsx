import { getCurso } from "@/api/cursos"
import Link from "next/link"

type CursoPage = {
  params: {
    slug: string
  }
}

export default async function CursoPage({ params }: CursoPage) {
  const curso = await getCurso(params.slug)

  return (<>
    <h2>Curso de {curso.nome}:</h2>
    <p>Detalhes:</p>
    <ul>
      <li>Descrição: {curso.descricao}</li>
      <li>Total de aulas: {curso.total_aulas}</li>
      <li>Total de Horas: {curso.total_horas}</li>
    </ul>
    <br />
    <p>Aulas do curso:</p>
    <ul>
      {curso && curso.aulas.map((r) => (
        <li key={r.id}><Link href={`cursos/${params.slug}/${r.slug}`} >{r.nome}</Link></li>
      ))}
    </ul>

  </>)
}