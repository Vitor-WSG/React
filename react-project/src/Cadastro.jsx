const luana = {
  cliente: "Luana",
  idade: 27,
  ativa: true,
  compras : [
    {nome:'Notebook', preco: 'R$ 2500'},
    {nome:'Geladeira', preco: 'R$ 3000'},
    {nome:'Smartphone', preco: 'R$ 1500'}
  ]
}

const mario = {
  cliente: "Mario",
  idade: 31,
  ativa: false,
  compras : [
    {nome:'Notebook', preco: 'R$ 2500'},
    {nome:'Geladeira', preco: 'R$ 3000'},
    {nome:'Smartphone', preco: 'R$ 1500'},
    {nome:'Guitarra', preco: 'R$ 3500'}
  ]
}


const Cadastro = () => {
  const dados = mario
  const soma = dados.compras.map((r)=>Number(r.preco.replace('R$ ','')))
  const total = soma.reduce((a,b)=>a+b,0)


  return (
  <>
    <h3>Nome: <span>{dados.cliente}</span></h3>
    <h3>Idade: <span>{dados.idade}</span></h3>
    <h3>Situação: <span style={{color: dados.ativa ? 'green':'red'}}>{dados.ativa ? 'Ativo': 'Inativo'}</span></h3>
    <h3>Total gastos: <span>R$ {total}</span></h3>
    <h3 style={{display: total > 10000 ? 'block':'none'}}>Atenção: Gastos excessivos</h3>
  </>
  )
}

export default Cadastro