import React from 'react'
import './button.css'

interface buttontype{
    text:string,
    onclick:()=>void,
    style?:string,
}

export default function Button({text,onclick,style}:buttontype) {


  return (
    <button className={`${style} defaultbtnstyle`} onClick={onclick}>{text}</button>
  )
}
