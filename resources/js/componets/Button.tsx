import React, { MouseEventHandler } from 'react'
import './button.css'

interface buttontype{
    text:string,
    // onclick:()=>void,
    onclick: MouseEventHandler<HTMLButtonElement>;
    style?:string,
}

export default function Button({text,onclick,style}:buttontype) {


  return (
    <button className={`${style} defaultbtnstyle`} onClick={onclick}>{text}</button>
  )
}
