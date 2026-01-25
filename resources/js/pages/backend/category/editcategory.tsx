import React, { useState } from 'react'
import { usePage,useForm,router } from '@inertiajs/react'
import BackendLayout from '@/adminlayouts/BackendLayout';
import Form from '@/componets/Form';

function Editcategory() {
    const {categorydata}:any = usePage().props;
     const[form,setForm]=useState({
        category:categorydata?.name
    })
    const inputs=[
        {
            name:'category',
            value:form?.category
        }
    ]

    const handlechange=(e:any)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
const updatedata=async(e:any)=>{
    e.preventDefault()
    // alert("update")
    router.put(`/admin/saveeditedcategegory/${categorydata.id}`,
        form
    )
}
  return (
    <BackendLayout navbar={true} sidebar={true}>

        <Form onclick={updatedata} formdataonchange={handlechange} data={inputs}/>
    </BackendLayout>
  )
}

export default Editcategory
