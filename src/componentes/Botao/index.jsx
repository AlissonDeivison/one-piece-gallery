import React from 'react'

export default function Botao({ styles,content}) {
  return (
    <button className={styles}>{content}</button>
  )
}
