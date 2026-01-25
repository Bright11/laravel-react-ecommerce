import React from 'react'
import './SidebarCategory.css'
import { Link, usePage } from '@inertiajs/react'

function SidebarCategory() {
    const{category}:any=usePage().props;
    const data=[
        {
            name:"Electronics",
            subcategories:[
                {name:"Mobile Phones"},
                {name:"Laptops"},
                {name:"Cameras"}
            ]
        },
        {
            name:"Fashion",
            subcategories:[
                {name:"Men's Clothing"},
                {name:"Women's Clothing"},
                {name:"Accessories"}
            ]
        },
        {
            name:"Home & Garden",
            subcategories:[
                {name:"Furniture"},
                {name:"Kitchen"},
                {name:"Outdoor"}
            ]
        },
        {
            name:"Sports & Outdoors",
            subcategories:[
                {name:"Fitness Equipment"},
                {name:"Outdoor Gear"},
                {name:"Team Sports"}
            ]
        },
        {
            name:"Health & Beauty",
            subcategories:[
                {name:"Skincare"},
                {name:"Makeup"},
                {name:"Personal Care"}
            ]
        }
    ]
    console.log("category", category)
  return (
    <div className=''>
         {category.map((item:any,index:number)=>(
            <li key={index}>
               <Link href="">{item?.name}</Link>
            </li>
         ))}
    </div>
  )
}

export default SidebarCategory
