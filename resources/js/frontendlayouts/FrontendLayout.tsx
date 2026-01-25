import React, { ReactNode } from 'react'
import Navigationbar from './Navigationbar'
import Sidebar from './Sidebar'
import './frontendlayoutcss.css'

 interface pageschildren{
    children:ReactNode,
    navigation?:boolean,
    footer?:boolean,
    sidebar?:boolean,
    sidebarcontent?:ReactNode,
    bottnclick?:any,
    mobilesidebar?:boolean
 }
function FrontendLayout({children,navigation,footer,sidebar,sidebarcontent,bottnclick,mobilesidebar=false}:pageschildren) {

  return (
    <div>
        {navigation && <>
        <Navigationbar bottnclick={bottnclick}/>
        <div className='divider'></div>
        </> }
       <div className={sidebar?"main_with_sidebar-container":"no_sidebar_main_container"}>
        {sidebar && <div className={`my_main_sidebar ${mobilesidebar?"hidesidebarmobile":null }`}>
          <Sidebar>
            {sidebarcontent}
          </Sidebar>
            </div>}
        <div className={sidebar?"my_main_content_with_sidebar":"my_main_content_no_sidebar"}>
            {children}
        </div>
       </div>
        {footer && <div></div>}
    </div>
  )
}

export default FrontendLayout
