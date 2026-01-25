import Form from '@/componets/Form'
import BackendLayout from '@/adminlayouts/BackendLayout'
import React,{ChangeEvent, useEffect, useState} from 'react'
import './product.css'
import { Link } from '@inertiajs/react'
import { router,usePage,useForm } from '@inertiajs/react'
import { toast } from "react-toastify";
import Pagination from '@/componets/Pagination'




interface addproducttype{
    productname:string,
    price:number,
    purcheseprice:number,
    qty:number,
    description:string,
    file:File | null
}

function Addproduct() {
    const {categorydata,products}:any=usePage().props;
    // useEffect(()=>{
    //     alert("yes")
    // })
    console.log("products", products)
    const data=[
        {
            name:"Rice",
            price:10
        }
    ]
    const [form, setForm]= useState({
        productname:"",
        price:0,
        purcheseprice:0,
        qty:0,
        description:"",
        file:null
    })
    const forminput=[
        {
            Label:"Product Name",
            type:"text",
            placeholder:"Enter product name",
            name:"productname",

        },
        {
            Label:"Product Price",
            type:"number",
            placeholder:"Enter product price",
            name:"price",

        },
        {
            Label:"Purchese Price",
            type:"number",
            placeholder:"Enter product purchese price",
            name:"purcheseprice",

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
            placeholder:"Product keywords"
        },
        {
            Label:"Product description",
            placeholder:"Enter product description",
            name:"description",

        },
    ]

    const tableheader=[
        {
            name:"Product"
        },
        {
            name:"Image"
        },
        {
            mame:"Category"
        },
        {
            name:"Price"
        },
        {
            name:"Stock"
        }
    ]
    const onchangehadler=(e:ChangeEvent<HTMLInputElement>)=>{
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
    const [openform,setOpenform]=useState<boolean>(false)
    const saveproduct = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // alert(form.price);
       router.post("saveproduct", form,{
        onSuccess:()=>{
             setOpenform(!openform)
             toast.success("Product saved successfully");

        }
       })
    }
    const closeform=()=>{
    setOpenform(!openform)
}
  return (
    <BackendLayout navbar={true} footer={false} sidebar={true}>
{!openform?
<div className="p-4 tableclass">
    <button className='closebtn mb-5' onClick={closeform}>Close</button>
  <div className="overflow-x-auto rounded-lg shadow ">
                <table className="hidden w-full border-collapse md:table">
                    <thead className="bg-gray-100 border-b-2 mb-1">
                        <tr>
                            <th className="p-3 text-left text-sm font-semibold text-gray-700">
                                Name
                            </th>

                                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                                Image
                            </th>
                             <th className="p-3 text-left text-sm font-semibold text-gray-700">
                                Category
                            </th>
                             <th className="p-3 text-left text-sm font-semibold text-gray-700">
                                Price
                            </th>
                             <th className="p-3 text-left text-sm font-semibold text-gray-700">
                                Purchese Price
                            </th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-700">
                               Stock
                            </th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-700">Edit</th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-700">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products?.data?.map((items: any) => (
                            <tr key={items?.id} className="border-b">
                                <td className="p-3">{items?.name}</td>
                                 <td className="p-3">

                        <img width={100} height={100} key={items?.id} src={items.image_url} alt={items?.name} />


                                 </td>
                                 <td>
                                    {items?.category}
                                 </td>
                                 <td>
                                   ${items?.price}
                                 </td>
                                 <td>
                                    ${items?.purchese}
                                 </td>
                                    <td>
                                    {items?.stock}
                                 </td>
                                <td className="p-3">
                                    <Link href={`/admin/editproduct/${items?.id}`} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Update</Link>
                                </td>
                                <td className="p-3">
                                    <Link href={`/admin/deletecategory/${items?.id}`} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Delete</Link>
                                </td>
                            </tr>
                        ))}







                    </tbody>
                </table>
<Pagination links={products.links} />
            </div>

</div>

:
<Form textarea={textarea} closeform={closeform} showclosebtn={true} btncolor={'btncolor'} options={categorydata} selectinput={true} formdataonchange={onchangehadler} data={forminput} onclick={saveproduct}/>
}


    </BackendLayout>
  )
}

export default Addproduct
