import React, { useState } from 'react'
import './AdminSidebar.css'
import { RiDashboardLine } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { Link,usePage } from '@inertiajs/react';

function AdminSidebar() {
    const {url}=usePage();
    const sidebarlinks=[
        {
            name:"Visit Site",
            link:"/",
            icons:<MdCategory className='sidebaricons'/>
        },
        {
            name:"Dashboard",
            link:"/admin/Dashboard",
            icons: <RiDashboardLine className='sidebaricons' />
        },
        {
            name:"Product",
            link:"/admin/addproduct",
            icons:<FaProductHunt className='sidebaricons'/>
        },
        {
            name:"Category",
            link:"/admin/addcategory",
            icons:<MdCategory className='sidebaricons'/>
        },
    ]
  return (
    <div className='adminsidebar_container'>
        <ul>
            {sidebarlinks.map((item, index)=>(
                <li key={index} className={`${url === item?.link ? "activelink":""}`}>
                     {item?.icons}
                {/* <a href={item?.link}>{item?.name}</a> */}
                <Link  href={item?.link}>{item?.name}</Link>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default AdminSidebar
