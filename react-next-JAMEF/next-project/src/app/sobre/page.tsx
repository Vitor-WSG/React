import Counter from "@/components/counter"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Esta é a pagina Sobre',
}

export default function SobrePage () {
  return(
    <>
      <h1>Pagina Sobre</h1>
      <Counter/>
    </>
  )
}