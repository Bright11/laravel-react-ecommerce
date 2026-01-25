import React, { ReactNode } from 'react'

interface sidebarprops{
    children:ReactNode
}
function Sidebar({children}:sidebarprops) {
  return (
    <div>
       <ul className='sidebar_ul'>
         {children}
       </ul>
    </div>
  )
}

export default Sidebar
