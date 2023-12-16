import React from 'react'
import ClickableWord from './clickableWord'

type ClickableParagraphProps = {
    paragraph: string
}

const ClickableParagraph: React.FC<ClickableParagraphProps> = ({paragraph}) => {
  
    //make sure that the paragraph is actualy a string
    const stringifyParagraph = paragraph.toString()

    //split the pargraph by whitespaces
    const paragraphArray: string[] = stringifyParagraph.split(" ")

    //optionaly characters like , . : ; and the likes should be removed 
    //and the words should be converted in lowercase script to allow for easier 
    //searching manipulation 

    //makes a button of each word in the paragraph
    const clickableParagraph = paragraphArray.map((p, i) => (<span key={i}><ClickableWord word={p}/> </span> ))

    return (
    <div>{clickableParagraph}</div>
  )
}

export default ClickableParagraph