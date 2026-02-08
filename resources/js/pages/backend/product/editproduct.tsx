import React, { useEffect, useState } from 'react'
import { usePage,useForm,router } from '@inertiajs/react'
import BackendLayout from '@/adminlayouts/BackendLayout';
import Form from '@/componets/Form';
import { toast } from "react-toastify";

function Editproduct() {
    const {product,editcategory,category}:any = usePage().props;
    // useEffect(()=>{
    //      window.location.reload();
    // })
    const [form,setForm]=useState({
         productname:product?.productname,
        price:product?.price,
        purcheseprice:product?.purcheseprice,
        stock:product?.stock,
        description:product?.description,
        keywords:product?.keywords,

        file:null
    })
     const forminput=[
        {
            Label:"Product Name",
            type:"text",
            placeholder:"Enter product name",
            name:"productname",
            value:form?.productname

        },
        {
            Label:"Product Price",
            type:"number",
            placeholder:"Enter product price",
            name:"price",
             value:form?.price

        },
        {
            Label:"Purchese Price",
            type:"number",
            placeholder:"Enter product purchese price",
            name:"purcheseprice",
             value:form?.purcheseprice

        },
        // {
        //     Label:"Product Qty",
        //     type:"number",
        //     placeholder:"Enter qty",
        //     name:"qty",

        // },
        {
            Label:"Product Stock",
            type:"number",
            placeholder:"Enter stock qty",
            name:"stock",
            value:form?.stock

        },

         {
            Label:"Product Image",
            type:"file",
            placeholder:"Enter product Image",
            name:"file",

        },

    ]

    const options=[
        {
            id:1,
            name:"Electronice",
        },

{
            id:2,
            name:"Women",
        },
        {
            id:3,
            name:"Men",
        },
    ]

    const textarea=[
        {
            Label:"Product keywords",
            name:"keywords",
            placeholder:"Product keywords",
            value:form?.keywords
        },
        {
            Label:"Product description",
            placeholder:"Enter product description",
            name:"description",
            value:form?.description

        },
    ]


    const handlechange=(e:any)=>{
        const {name,value,files,type}=e.target;
        if(type==="file" && files){
            setForm({
                ...form,
                [name]:files[0]
            })
        }else{
            setForm({
                ...form,
                [name]:value
            })
        }
    }
    const updateproduct=(e:any)=>{
        e.preventDefault()
        router.put(`/admin/saveeditedproduct/${product?.id}`,form,{
            onSuccess:()=>{
                // alert("yes")
                 toast.success("Product saved successfully");
            }
        })
    }
  return (
   <BackendLayout sidebar={true}>
    Editproduct
    <Form editcategory={editcategory} textarea={textarea} options={category} selectinput={true} formdataonchange={handlechange} data={forminput} onclick={updateproduct}/>
   </BackendLayout>
  )
}

export default Editproduct
