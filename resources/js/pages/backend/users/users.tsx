import BackendLayout from '@/adminlayouts/BackendLayout'
import Dialog from '@/componets/Dialog'
import React, { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

function Users() {
    const {users}:any=usePage().props;
    const [action,setAction]=useState<boolean>(false)
      const [userId,setUserId]=useState()
    const[form,setForm]=useState({
        role:"",
        id:userId
    })

 const takeaction = (id: any) => {
  setUserId(id);
//   alert(id);
 setAction(!action)
};


    const closedialog=()=>{
        alert("sure")
         setAction(!action)
    }
    console.log("users", users)
    const handlechange=(e:any)=>{
        const {name,value}=e.target;
        setForm(prev=>({
            ...prev,
            [name]:value
        }))

    }
    const updateUserPosition= (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault()

        router.post(`updateuserposstion/${id}`,form),{
            onSuccess:()=>{
                alert("i")
            }
        }
    }
  return (
    <BackendLayout navbar={true} sidebar={true}>
        <div className="overflow-x-auto">

  <div className="min-w-full bg-white shadow-md rounded-lg">


    <div className="hidden md:grid grid-cols-6 bg-gray-100 text-gray-600 uppercase text-sm font-semibold px-6 py-3">
      <div>Name</div>
      <div>Email</div>
      <div>Role</div>
      <div>Status</div>
      <div>Promot</div>

      <div className="text-right">Actions</div>
    </div>

    {users?.map((user:any)=>(
        <div className="divide-y divide-gray-200">


      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-6 py-4 text-sm">


        <div>
          <span className="md:hidden font-semibold text-gray-500">Name:</span>
         {user?.name}
        </div>


        <div>
          <span className="md:hidden font-semibold text-gray-500">Email:</span>
         {user?.email}
        </div>


        <div>
          <span className="md:hidden font-semibold text-gray-500">Role:</span>
         {user?.role_as}
        </div>


        <div onClick={() => takeaction(user?.id)}
>
          <span className="md:hidden font-semibold text-gray-500">Status:</span>
          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
              {user?.is_active==true?"  Active":"Suspended"}

          </span>
        </div>
<div>
          <span className="md:hidden font-semibold text-gray-500">Promot:</span>
          <form onSubmit={(e) => updateUserPosition(e, user.id)} className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs flex gap-1">
           <select name="role_as" id='role_as' onChange={handlechange}>
            {user&&
             <option value={user?.role_as}>{user?.role_as}</option>
            }
            {user?.role_as=="user"?
            <>
             <option value="admin">Admin</option>
            </>:<>
             <option value="user">User</option>
            </>
        }

            {/* <option value="user">User</option>
            <option value="admin">Admin</option> */}
           </select>
           <button className='px-2 py-1 cursor-pointer'>Update</button>
          </form>
        </div>

        <div className="flex md:justify-end gap-2">
          <button className="px-3 py-1 text-xs text-white bg-blue-600 rounded hover:bg-blue-700">
            Edit
          </button>
          <button className="px-3 py-1 text-xs text-white bg-red-600 rounded hover:bg-red-700">
            Delete
          </button>
        </div>

      </div>




    </div>
    ))}

  </div>

</div>
{action && <Dialog  dataid={userId} procceed={takeaction} close={closedialog} title='Are you sure you want to do this?'/>}
    </BackendLayout>
  )
}

export default Users
