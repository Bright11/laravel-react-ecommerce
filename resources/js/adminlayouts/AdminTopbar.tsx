import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOff } from "react-icons/io";
import React from 'react'
import "./admintopbar.css"
import { Link } from '@inertiajs/react'
function AdminTopbar() {
  return (
    <div className="admintopbar_container">
        <div>
            <h1>Dashboard</h1>
        </div>
<div>
<ul>
    <li>
        <Link href="">
       <IoIosNotificationsOff />
        </Link>
    </li>
    <li>
        <Link href="">
      <AiOutlineMessage />
        </Link>
    </li>
    <li>
        <Link href="">
      <BiLogOutCircle />
        </Link>
    </li>
</ul>
</div>
    </div>
  )
}

export default AdminTopbar
