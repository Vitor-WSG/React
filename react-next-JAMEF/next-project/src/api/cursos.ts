type Curso = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  estoque: number,
  importado: number,
  slug:string
}

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

const api = "https://api.origamid.online/cursos"

export async function getCursos() {
  const request = await fetch(api)
  if (!request.ok) {
    throw new Error(`Erro ao acessar API: ${request.status}`)
  }
  return (await request.json() as Curso[])
}

export async function getCurso(curso: string) {
  const request = await fetch(`${api}/${curso}`)
  if (!request.ok) {
    throw new Error(`Erro ao acessar API: ${request.status}`)
  }
  return (await request.json()) as Curso & {
    aulas: Aula[]
  }
}

export async function getAulas(curso: string, aula: string) {
  const request = await fetch(`${api}/${curso}/${aula}`)
  if (!request.ok) {
    throw new Error(`Erro ao acessar API: ${request.status}`)
  }
  return (await request.json()) as Aula[]
}