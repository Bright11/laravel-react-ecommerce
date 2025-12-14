import React from 'react'

interface closformprops{
    closeform:()=>void;
    style?:string,
}
function CloseFormbtn({closeform,style}:closformprops) {
  return (
    <button type='button' onClick={closeform} className={`${style} closebtn`}>Close</button>
  )
}

export default CloseFormbtn
