import React, { useState } from 'react'
import { ImCross } from "react-icons/im"
import { useSelector } from 'react-redux'
import CartItem from './CartItem'



const Cart = ({ setCart }) => {
  const Product = useSelector((state) => state.cart)

  return (
    <>

      <div className=' border-l-2 overflow-x-hidden h-full'>
        <h1 className=' text-center text-xl font-semibold p-7'>Your Cart </h1>


        {
          Product.map(product => {
            return <CartItem product={product} key={product._id} ></CartItem>

          })
        }

        <div className="my-2 p-6">
          <h3 className='font-semibold'>Subtotal :- ₹8000</h3>
        </div>
        <div className="flex w-52 my-2 ml-4 ">
          <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Checkout</button>
          <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Clear</button>
        </div>

        <ImCross onClick={() => setCart(false)} className='absolute right-4 top-8 text-lg text-purple-600 cursor-pointer '></ImCross>

      </div>






    </>
  )
}

export default Cart