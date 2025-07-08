type PageParams = {
  params :{
    slug:string[]
  }
}

export default function Formacao ({params}:PageParams){
  return (<>
    <h1>Formacoes</h1>
    {params.slug.join('/')}
  </>)
}