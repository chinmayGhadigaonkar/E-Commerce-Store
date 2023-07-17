import React, { useState } from 'react'
import { AiFillMinusCircle } from "react-icons/ai"
import { AiFillPlusCircle } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import { useSelector } from 'react-redux'



const Cart = ({ setCart }) => {
  const Product = useSelector((state) => state.cart)

  return (
    <>

      <div className=' border-l-2 overflow-x-hidden h-full'>
        <h1 className=' text-center text-xl font-semibold p-7'>Your Cart </h1>


        {
          Product.map(product => {
            return (
              <div className="img flex ml-2 justify-between items-center" key={product._id}>
                <div className=' flex '>
                  <img alt="ecommerce" className=" object-fill w-[80px] border-2 mx-2 h-[80px] " src={product.img[0]} />
                  <h4 className='text-base  mt-2  w-52 font-semibold'>{product.title}</h4>
                </div>
                <div>
                <p className='text-base  mt-2  w-22 font-semibold'>Price:- {product.price}</p>
                  </div>
                <div className='  space-x-3 mr-12  flex  '>
                  <AiFillMinusCircle className='my-1 text-purple-500 cursor-pointer text-lg  ' />
                  <span className='mx-2'>2 </span>
                  <AiFillPlusCircle className='my-1 text-purple-500  cursor-pointer  text-lg ' ></AiFillPlusCircle>
                </div>
                

              </div>
            )

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