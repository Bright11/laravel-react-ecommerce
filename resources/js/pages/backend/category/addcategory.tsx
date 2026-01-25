import BackendLayout from '@/adminlayouts/BackendLayout'
import Form from '@/componets/Form'
import React, { useState } from 'react'
import { Head, useForm, router, usePage, Link } from '@inertiajs/react'

// interface categoryprops{
//     name:string
// }

function Addcategory() {
    const { categorydata }: any = usePage().props;
    const { data, setData, post, put, errors, processing, reset } = useForm({
        category: ""
    })

    console.log("data", categorydata)
    // const[form,setForm]=useState<categorytype>({
    //     category:""
    // })
    const forminput = [
        {
            name: "category",
            type: "text",
            placeholder: "Enter category name"
        },

    ]
    const tableheader = [
        {
            name: "category"
        },

    ]
    const onchangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const savedata = async (e: any) => {
        e.preventDefault()
        // alert("category")
        //      post(route("savecategory"), {
        //     onSuccess: () => {
        //         console.log("Saved!");
        //     }
        // });
        router.post("savecategory", data), {
            onSuccess: () => reset()
            // onSuccess: () => {
            //     console.log("Saved!");
            //     reset()
            // }
        }
    }

    return (
        <BackendLayout sidebar={true} footer={false} navbar={true}>
            {/* <h1>hi{data?.category}</h1> */}
            <Form onclick={savedata} data={forminput} formdataonchange={onchangehandler} />

            <div className="overflow-x-auto rounded-lg shadow ">
                <table className="hidden w-full border-collapse md:table">
                    <thead className="bg-gray-100 border-b-2 mb-1">
                        <tr>
                            <th className="p-3 text-left text-sm font-semibold text-gray-700">
                                Name
                            </th>


                            <th className="p-3 text-left text-sm font-semibold text-gray-700">Edit</th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-700">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categorydata?.map((items: any) => (
                            <tr className="border-b">
                                <td className="p-3">{items?.name}</td>


                                <td className="p-3">
                                    <Link href={`/admin/editcategory/${items?.id}`} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Update</Link>
                                </td>
                                <td className="p-3">
                                    <Link href={`/admin/deletecategory/${items?.id}`} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Delete</Link>
                                </td>
                            </tr>
                        ))}







                    </tbody>
                </table>

            </div>
        </BackendLayout>
    )
}

export default Addcategory


