import Tags from "../Tags"
import styles from "./Galeria.module.scss"
import fotos from "./fotos.json"

import Cards from "./Cards"
import { useState } from "react";

export default function Galeria() {

  const  [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((item) => item.tag))]; //Primeiro eu percorri meu arrey fotos com a função map, depois retornei a tag para ela não se repetir e espalhei em um array
  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    })

    setItens(novasFotos)
  }
  return (
    <section className={styles.galeria}>
      <h2 className={styles.galeria__h2}>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
      <Cards itens = {itens} styles = {styles} />
    </section>
  )
}
