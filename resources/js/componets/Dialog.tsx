import React, { ReactNode } from 'react'
import "./dialog.css"

interface propertyprops{
    title:string,
    children?:ReactNode,
    close:any,
    procceed:any,
    dataid?:any,
    open?:any
}
function Dialog({dataid,open,title,children,close,procceed}:propertyprops) {
  return (
    <div className='dialog_body'>
        <div className='dialog_main_container'>
             <p> {title}</p>
           <div className='dialog_btn_container'>
            <button onClick={close}>Close</button>
            <button onClick={()=>procceed(dataid)}>Proceed</button>
           </div>

        </div>
    </div>
  )
}

export default Dialog
