import React, { useState } from 'react'
import { AiFillMinusCircle } from "react-icons/ai"
import { AiFillPlusCircle } from "react-icons/ai"
import {ImCross} from "react-icons/im"


const Cart = ({setCart}) => {

  return (
    <>

    <div className=' overflow-x-hidden'>
    <h1 className=' text-center text-xl font-semibold p-7'>Your Cart </h1>

<div className="img flex ml-2 justify-between items-center">
  <div className=' flex '>
    <img alt="ecommerce" className=" object-fill w-[80px] border-2 mx-2 h-[80px] " src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
    <h4 className='text-base    mt-2  w-52   font-semibold'>Mens Cotton Henley Neck/Chinese Collar Tshirt</h4>
  </div>

  <div className=' space-x-3 mr-12  flex  '>
    <AiFillMinusCircle className='my-1 text-purple-500 cursor-pointer text-lg  ' />
    <span className='mx-2'>2 </span>
    <AiFillPlusCircle className='my-1 text-purple-500  cursor-pointer  text-lg ' ></AiFillPlusCircle>
  </div>

</div>
<div className="my-2 p-6">
  <h3 className='font-semibold'>Subtotal :- ₹8000</h3>
</div>
<div className="flex w-52 my-2 ml-4 ">
  <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Checkout</button>
  <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Clear</button>
</div>

<ImCross onClick={()=>setCart(false)} className='absolute right-4 top-8 text-lg text-purple-600 cursor-pointer '></ImCross>

    </div>
      

      

      

    </>
  )
}

export default Cart