import React from 'react'
import { Link, usePage, } from '@inertiajs/react'
import "./details.css"
import FrontendLayout from '@/frontendlayouts/FrontendLayout';
import SidebarCategory from '@/frontendlayouts/SidebarCategory';
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';

function Details() {
    // const {url}=usePage();
    const {datadetails,relatedpro,url}:any=usePage().props;

    console.log("relatedpro",relatedpro)
    console.log("details", datadetails)
  return (
    <FrontendLayout
    navigation={true}
    sidebarcontent={<SidebarCategory/>}
    sidebar={true}>
        <div className='details_container'>

           <div>
             <img src={`${datadetails?.image}`} alt={datadetails?.name} />
           </div>
        <div className="productinfo">
            <h1>{datadetails?.name}</h1>
            <p>${datadetails?.price}</p>

           <Link href={`/addtocart/${datadetails?.id}`} className='detailsaddtocart'><AiOutlineShoppingCart size={24}/> Add to cart</Link>
 <Link href="" className='detailsaddtocart'><GiSelfLove color="red" size={24} />Add to wishlist</Link>
        </div>




    </div>
    <div className='description'>
    <p>{datadetails?.description}</p>
</div>
     <div className='products_grid'>
        {relatedpro?.map((item:any)=>(
            <div className='product_card'>
           <Link href={`/details/${item?.id}`}>
            <img src={item?.image} alt="Product 1" />
             <p>$19.99</p>
            <h3>{item?.name}</h3>

            <div className='data_overlay'>
            <Link href="" className='add_to_cart_button'><AiOutlineShoppingCart size={24}/></Link>
            <Link href=""><GiSelfLove color="red" size={24} /></Link>
             <Link href=""><AiFillEye size={24}/></Link>
            </div>
           </Link>
        </div>
        ))}


    </div>
    </FrontendLayout>
  )
}

export default Details
