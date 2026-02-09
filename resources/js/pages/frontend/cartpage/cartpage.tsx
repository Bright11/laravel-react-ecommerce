import FrontendLayout from '@/frontendlayouts/FrontendLayout'
import { router, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import './cartpage.css'


type CartItem = {
  id: number;
  qty: number;
};

function Cartpage() {
    const {userscart,totalitems}:any=usePage().props;
    console.log("totalitems",totalitems)
    const [qty, setQty] = useState<Record<number, number>>({});

   useEffect(() => {
  if (!userscart) return;
  setQty(prev => {
    const next: Record<number, number> = { ...prev };

    userscart.forEach((item: CartItem) => {
      if (next[item.id] === undefined) {
        next[item.id] = item.qty;
      }
    });

    return next;
  });
}, [userscart]);

    const updatecart =(e:React.MouseEvent,id:number, mode:string)=>{
        e.preventDefault()
         router.post(`/updatecart/${id}`, { qty: qty[id],mode:mode },{
            onSuccess:()=>{
                 window.location.reload();
            }
         });
    }

  return (
   <FrontendLayout navigation={true}>
<div className="cartpagecontainer">
     <div className="w-full overflow-x-auto">
        {/* {qty} */}
        {totalitems?(


  <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Qty</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Update</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Delete</th>
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
        <td className="px-4 py-3 text-sm text-gray-600">{item?.qty}</td>
        <td className="px-4 py-3 text-sm text-gray-600">{item?.total}</td>

        <td className="px-4 py-3 text-sm text-gray-600">
            <form className='cartpageform'>
                <button onClick={(e)=>updatecart((e),item?.id,'decreaseitem')}>-</button>
                <input

            type="number"
            min={1}
            // value={qty[item.id] ?? ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;

                setQty(prev => ({
                ...prev,
                [item.id]: value === '' ? 1 : Number(value),
                }));
            }}
            placeholder='Qty'

            />
                <button onClick={(e)=>updatecart((e),item?.id,"increased")} >+</button>
            </form>
        </td>

        <td className="px-4 py-3">
          <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">
            <a href={`/deletecart/${item?.id}`}>Delete</a>
          </span>
        </td>
      </tr>
   ))}
<tr>
    <td>Total ${totalitems}</td>
</tr>


    </tbody>
  </table>
  ):(
    <h1>No item in the cart</h1>
  )}
</div>
</div>


   </FrontendLayout>
  )
}

export default Cartpage
