import React, { useContext } from 'react'
import { Translation } from '../../translation/TranslationContextProvider'
import "./footer.css"

const Footer = () => {

  const { content } = useContext(Translation);

  return (
    <footer className='footer'>
        <h4>{content.author} &copy; 2023</h4>
    </footer>
  )
}

export default Footer