// import { Link } from '@inertiajs/react'
// import React from 'react'

// interface tabledata{
//      thead:any,
//      tbody?:any,
//      updatelink?:any,
//      deletelink?:any

// }


// function Table({tbody,thead,updatelink,deletelink}:tabledata) {
//   return (
//      <div className="overflow-x-auto rounded-lg shadow ">
//     <table className="hidden w-full border-collapse md:table">
//       <thead className="bg-gray-100 border-b-2 mb-1">
//         <tr>
//             {thead?.map((items:any,index:number)=>(
//                <>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">
//                     {items?.name}
//                 </th>
//                     <th className="p-3 text-left text-sm font-semibold text-gray-700">
//                     {items?.price}
//                 </th>
//                     <th className="p-3 text-left text-sm font-semibold text-gray-700">
//                     {items?.stock}
//                 </th>

//                </>
//             ))}

//     <th className="p-3 text-left text-sm font-semibold text-gray-700">Edit</th>
//                     <th className="p-3 text-left text-sm font-semibold text-gray-700">Delete</th>
//         </tr>
//       </thead>

//       <tbody>
//         {tbody?.map((items:any)=>(
//             <tr className="border-b">
//           <td className="p-3">{items?.name}</td>
//           <td className="p-3">{items?.price}</td>

//           <td className="p-3">
//             <Link href={`/${updatelink}/${items?.id}`} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Update</Link>
//           </td>
//           <td className="p-3">
//             <Link href={`/${updatelink}/${items?.id}`} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Delete</Link>
//           </td>
//         </tr>
//         ))}







//       </tbody>
//     </table>

//   </div>
//   )
// }

// export default Table
