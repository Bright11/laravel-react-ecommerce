import { AiFillEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import FrontendLayout from '@/frontendlayouts/FrontendLayout'
import Sidebar from '@/frontendlayouts/Sidebar'
import SidebarCategory from '@/frontendlayouts/SidebarCategory'
import React, { useState } from 'react'
import "./home.css"
import { Link, router, usePage } from '@inertiajs/react'
import Pagination from "@/componets/Pagination";

function Home() {
    const{products}:any=usePage().props;

    const [mobilenav,setMobilenav]=useState<boolean>(true)
    const mobilenavfunction=()=>{
        setMobilenav(!mobilenav)
    }
    console.log("products", products)

    const addToCart = (id: number) => {
    router.get(`/addtocart/${id}`, {}, {
        onSuccess: () => {
            // Optional: Handle success, e.g., show a toast notification
            console.log('Item added to cart');
        },
        onError: (errors) => {
            // Handle errors from validation or server
            console.error(errors);
        }
    });
};
  return (
    <FrontendLayout navigation={true}
    sidebar={true}mobilesidebar={mobilenav}
    sidebarcontent={<SidebarCategory/>}
    bottnclick={mobilenavfunction}
    >
<div className='main_products'>
    <h2>Welcome to our E-commerce Store!</h2>
    <p>Discover a wide range of products at unbeatable prices. Shop now and enjoy exclusive deals!</p>
    <div className='products_grid'>
        {products?.data?.map((item:any)=>(
            <div className='product_card'>
           <div >
            <img src={item?.image_url} alt="Product 1" />
             <p>${item?.price}</p>
            <h3>{item?.name}</h3>

            <div className='data_overlay'>
            <button onClick={(e)=>addToCart(item?.id)} className='add_to_cart_button'><AiOutlineShoppingCart size={24}/></button>
            <Link href=""><GiSelfLove color="red" size={24} /></Link>
             <Link href={`/details/${item?.id}`}><AiFillEye size={24}/></Link>
            </div>
           </div>
        </div>
        ))}


    </div>
<div className="pagination_container">
    <Pagination  links={products.links}/>
</div>
</div>

    </FrontendLayout>
  )
}

export default Home
