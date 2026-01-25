import FrontendLayout from '@/frontendlayouts/FrontendLayout'
import { usePage } from '@inertiajs/react'
import React from 'react'

function Cartpage() {
    const {userscart}:any=usePage().props;
    console.log("cart props", userscart)
  return (
   <FrontendLayout navigation={true}>

   <div className="w-full overflow-x-auto">
  <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
        {userscart?.map((item:any)=>(

     <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-800">{item?.name}</td>
        <td className="px-4 py-3 text-sm text-gray-600">
            <img width={100} height={100} src={item?.image} alt={item?.name} />
        </td>
        <td className="px-4 py-3 text-sm text-gray-600">{item?.price}</td>
        <td className="px-4 py-3">
          <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
            Active
          </span>
        </td>
      </tr>
   ))}



    </tbody>
  </table>
</div>

   </FrontendLayout>
  )
}

export default Cartpage
