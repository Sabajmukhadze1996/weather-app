import React from 'react'
import './Input.css'
import { FiSearch } from 'react-icons/fi'

interface InputProps {
    text: any,
    submit: any
    func: any
}


export const Input = ({text, submit, func}: InputProps) => {
  return (
    <form className="input" onSubmit={submit}>
      <input 
      autoFocus
      type="text" 
      placeholder="აირჩიეთ ლოკაცია ინგლისურად..."
      className="input_value"
      onChange={text}
      />
      <span className="input_icon" onClick={func}>
        <FiSearch />
      </span>
    </form>
  )
}
