import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import "./navigation.css"

interface navfunction{
    bottnclick?:()=>void,
}
function Navigationbar({bottnclick}:navfunction) {
    const {auth,cartcount}:any= usePage().props;
    const user = auth.user;
    console.log("cart count", cartcount)


    // const {user}:any=usePage().props
    console.log("user", user)
    const navigationlinks=[
        {
            name:"Home",
            link:"/",
        },
        {
            name:"Home",
            link:"/",
        },
    ]
  return (
    <div className='navigation_container'>
        <div className='sitelogo'>
            <img src="/logo/logo.ico" alt=''/>
        </div>
        <ul className='frontpage_ul'>
           {user?
        <>
        <li>
            <Link href="/logout">
            Logout
            </Link>
        </li>
           {user?.role_as=='admin' &&
             <li>
            <Link href="/admin/dashboard">
            Dashboard
            </Link>
        </li>
           }
        </>
        :
        <>
        <li>
            <Link href="register">
            Register
            </Link>
        </li>
        <li>
            <Link href="login">
            Login
            </Link>
        </li>
        </>
        }
        {navigationlinks?.map((data:any,index:number)=>(
             <li key={index}> <Link href={data?.link}>{data?.name}</Link> </li>
           ))}
           <li><Link href="">{user?.name}</Link></li>
          {cartcount &&
           <li className="cartcount">
           <Link href="/cartpage">
            <AiOutlineShoppingCart color="white" size={24}/>({cartcount})
           </Link>
           </li>
          }
        </ul>
        <button className="mobile_viewbnt" onClick={bottnclick}>
            <AiOutlineMenu color="white" size={24} />
        </button>

    </div>
  )
}

export default Navigationbar
