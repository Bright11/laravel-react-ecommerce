import Button from '@/componets/Button'
import FrontendLayout from '@/frontendlayouts/FrontendLayout'
import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import "./login.css"
import { router } from '@inertiajs/react'

function Login() {
    const[form,setForm]= useState({
        email:"",
        password:""
    })
    const [viewpassword, setViewpassword]=useState("Password")

    const handleinput=(e:any)=>{
        const {name,value}=e.target;
        setForm(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const handleviewassword=()=>{
        if(viewpassword=="password"){
            setViewpassword("text")
        }else{
            setViewpassword("password")
        }

    }
    const login=(e:any)=>{
        e.preventDefault()
        router.post("loginuser",form,{
            onSuccess:()=>{
                router.get("/");
            }
        })
    }
  return (
   <FrontendLayout navigation={true}>
     <form action="" className='form_register'>

              <div>
                  <input onChange={handleinput} name='email' value={form?.email}
                   type="email" placeholder='Email' />
              </div>

                 <div>
                <input onChange={handleinput} name='password' value={form?.password} type={viewpassword} placeholder='password' />
                 <button type='button' onClick={()=>handleviewassword()}><AiFillEye size={24} color={viewpassword=="password"?"":"red"} /></button>
               </div>

    <Button text='Login' style='btncolor' onclick={login}/>
            </form>
   </FrontendLayout>
  )
}

export default Login
