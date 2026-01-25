import React,{ReactNode} from 'react'
import AdminSidebar from './AdminSidebar';
import './FrontendLayout.css'
// import type { Config } from 'ziggy-js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AdminTopbar from './AdminTopbar';

interface layoutsprops{
    children:ReactNode;
    navbar?:false | true;
    sidebar:false | true;
    footer?:boolean
}
function BackendLayout({children,navbar, footer, sidebar}:layoutsprops) {
  return (
    <div>
       {navbar && <nav>
        <AdminTopbar/>
        </nav>}
       <div className='adminmainpagelayout'>
        {sidebar && <aside>
            <AdminSidebar/>
            </aside>}
        <main>
             {children}
        </main>
       </div>
       {footer && <footer></footer>}
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default BackendLayout
