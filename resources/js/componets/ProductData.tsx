import React from 'react'
import './ProductData.css'
import { FaProductHunt } from 'react-icons/fa6'
import { MdCategory } from "react-icons/md";
import { usePage } from '@inertiajs/react';
function ProductData() {
    const {daliy_sales}:any=usePage().props
  return (
    <div className='productdata_container'>
        <div className='counterdiv'>
           <div className='item_counter'>
             <h2>Daily sold</h2>
            <FaProductHunt color='black'/>
           </div>
            <p>{daliy_sales}</p>
        </div>
        <div className='counterdiv'>
           <div className='item_counter'>
             <h2>Daily Profit</h2>
            <MdCategory/>
           </div>
            <p>20</p>
        </div>
        <div className='counterdiv'>
            <div className='item_counter'>
            <h2>Weely sold</h2>

        </div>
        <p>20</p>
        </div>
        <div className='counterdiv'>
            <div className='item_counter'>
            <h2>Daily Profit</h2>

        </div>
        <p>20</p>
        </div>


    </div>
  )
}

export default ProductData
