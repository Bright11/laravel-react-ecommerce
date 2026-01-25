import { AiFillEye } from "react-icons/ai";
import FrontendLayout from '@/frontendlayouts/FrontendLayout'
import React, { useState } from 'react'
import "./register.css"
import Button from '@/componets/Button'
import { router } from "@inertiajs/react";

function Register() {
    const [form,setForm]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const [viewpassword,setViewpassword]=useState("password")
    const [viewconfirmpassword,setViewconfirmpassword]=useState("password")

    const handleviewassword=(type:string)=>{
        // e.preventDefault();

        if(type=="password"){
        if(viewpassword=="password"){
            setViewpassword("text")
        }else{
            setViewpassword("password")
        }
         }else if(type=="confirmpassword"){
             if(viewconfirmpassword=="password"){
            setViewconfirmpassword("text")
        }else{
            setViewconfirmpassword("password")
        }
         }
    }
    // React.ChangeEvent<HTMLInputElement>
    const handleinput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setForm(prev=>({
            ...prev,
            [name]:value
        }))
    }
    const register= async(e:any)=>{
        e.preventDefault()
       router.post("registeruser",form,{
        onSuccess:()=>{
// alert("good")
    }
       }

    )

    }
  return (
    <FrontendLayout navigation={true}>
        <form action="" className='form_register'>
          <div>

              <input onChange={handleinput} name='username' value={form?.username} type="text" placeholder='Username' />
          </div>
          <div>
              <input onChange={handleinput} name='email' value={form?.email}
               type="text" placeholder='Email' />
          </div>

             <div>
            <input onChange={handleinput} name='password' value={form?.password} type={viewpassword} placeholder='password' />
             <button type='button' onClick={()=>handleviewassword("password")}><AiFillEye size={24} color={viewpassword=="password"?"":"red"} /></button>
           </div>
           <div>
             <input onChange={handleinput}name='confirmpassword' value={form?.confirmpassword} type={viewconfirmpassword} placeholder='confirm password'/>
             <button type='button' onClick={()=>handleviewassword("confirmpassword")}><AiFillEye color={viewconfirmpassword=="password"?"":"red"} size={24}/></button>
           </div>
<Button text='Save' style='btncolor' onclick={register}/>
        </form>
    </FrontendLayout>
  )
}

export default Register
