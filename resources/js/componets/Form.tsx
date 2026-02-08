import React, { useState } from 'react'
import './form.css'
import Button from './Button'
import CloseFormbtn from './CloseFormbtn'

interface formprops{
    data:any,
    onclick:any,
    formdataonchange:any,
    selectinput?:true | false,
    options?:any,
    btncolor?:string,
    showclosebtn?:boolean,
    closeform?:any,
    textarea?:any[],
    editcategory? :any
}


function Form({data,btncolor,onclick,textarea,formdataonchange,selectinput,options,showclosebtn,closeform,editcategory}:formprops) {

  return (
    <div className='form_container'>
    <form action="">
        <div>
            {showclosebtn &&
        <CloseFormbtn closeform={closeform}/>
        }
        </div>

        {data.map((item:any,index:number)=>(
            <div>
                <input value={item?.value} onChange={formdataonchange} key={index} type={item.type} name={item.name} placeholder={item.placeholder}/>
            </div>

        ))}
         {selectinput &&
           <div>
            <select onChange={formdataonchange} name="category" >
                {editcategory?

                 <option value={editcategory?.categoryid}>{editcategory?.categoryname}</option>
                :
                 <option value="">--Selecte--</option>
                }

                {options?.map((items:any,index:number)=>(

                    <option value={items?.id}>{items?.name}</option>
                ))}
            </select>
            </div>
            }
            {textarea?.map((items:any,index:number)=>(
            <div>
                <textarea onChange={formdataonchange} rows={5} cols={80} name={items?.name} placeholder={items?.placeholder} value={items?.value}>

                </textarea>
            </div>
            ))}

        <Button style={btncolor} onclick={onclick} text='Save'/>
    </form>
    </div>
  )
}

export default Form
