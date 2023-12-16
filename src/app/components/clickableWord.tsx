"use client"

import React from 'react'

type ClickableWordProps = {
    word: string
}

const ClickableWord: React.FC<ClickableWordProps> = ({word}) => {

  const perseusSearch = (word: string) => {
    window.open(`http://www.perseus.tufts.edu/hopper/morph?l=${word}%5Cs&la=greek&can=qeou%5Cs0&prior=*fu/lac&d=Perseus:text:1999.01.0003:card=1&i=1`)
  }

  return (
    <button onClick={() => perseusSearch(word)}>{word}</button>
  )
}

export default ClickableWord
