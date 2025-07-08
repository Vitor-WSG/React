import Link from "next/link"

export default function Menu(){
  return <ul className="menu">
    <li>
      <Link href="/" prefetch={true}>Home</Link>
    </li>
    <li>
      <Link href="/sobre" prefetch={true}>Sobre</Link>
    </li>
    <li>
      <Link href="/contato" prefetch={true}>Contato</Link>
    </li>

    <li>
      <Link href="/usuarios" prefetch={true}>Usuarios</Link>
    </li>

    <li>
      <Link href="/vendas" prefetch={true}>Vendas</Link>
    </li>

    <li>
      <Link href="/produtos" prefetch={true}>Produtos</Link>
    </li>

    <li>
      <Link href="/cursos" prefetch={true}>Cursos</Link>
    </li>

  </ul>
}