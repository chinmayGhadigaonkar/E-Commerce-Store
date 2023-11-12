import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../store/Slice/cartSlice";

import { Link } from "react-router-dom";

const Cart = ({ setCart }) => {
  const { cartProduct, productTPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOnClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className=" h-full bg-white z-50 border-l-2 overflow-x-hidden">
        <h1 className=" text-center text-xl font-semibold p-7">Your Cart </h1>

        {cartProduct.map((product) => {
          return <CartItem key={product._id} product={product}></CartItem>;
        })}

        <div className="my-2 p-6">
          <h3 className="font-semibold">Subtotal :- ₹{productTPrice}</h3>
        </div>
        <div className="flex w-52 my-2 ml-4 ">
          <Link to="/checkout">
            <button
              disabled={productTPrice == 0 ? true : false}
              className={`flex ml-auto text-white border-0 py-2 px-6 focus:outline-none  rounded ${
                productTPrice == 0
                  ? "bg-purple-200"
                  : " bg-purple-500 hover:bg-purple-600"
              }`}>
              Checkout
            </button>
          </Link>
          <button
            disabled={productTPrice == 0 ? true : false}
            className={`flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded ${
              productTPrice == 0
                ? "bg-purple-200"
                : " bg-purple-500 hover:bg-purple-600"
            }`}
            onClick={handleOnClearCart}>
            Clear
          </button>
        </div>

        <ImCross
          onClick={() => setCart(false)}
          className="absolute right-4 top-8 text-lg text-purple-600 cursor-pointer "></ImCross>
      </div>
    </>
  );
};

export default Cart;
