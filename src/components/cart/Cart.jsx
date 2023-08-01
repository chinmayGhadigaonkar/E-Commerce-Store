import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../store/Slice/cartSlice";
import { VITE_BACKEND_URL } from "../../config";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = ({ setCart }) => {
  const { cartProduct, productTPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const Products = dispatch(cartFetch)

  const cartClear = async () => {
    try {
      const res = await fetch(`${VITE_BACKEND_URL}/cart/clearcart`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      const { products } = await res.json();
      if (products === undefined) {
        return toast.success("Your cart is clear");
      }
    } catch (e) {
      toast.error("Something went's wrong. Please try again");
    }
  };

  const handleOnClearCart = () => {
    cartClear();
    dispatch(clearCart());
  };

  return (
    <>
      <div className=" h-screen border-l-2 overflow-x-hidden">
        <h1 className=" text-center text-xl font-semibold p-7">Your Cart </h1>

        {cartProduct.map((product) => {
          return <CartItem product={product} key={product._id}></CartItem>;
        })}

        <div className="my-2 p-6">
          <h3 className="font-semibold">Subtotal :- ₹{productTPrice}</h3>
        </div>
        <div className="flex w-52 my-2 ml-4 ">
          <Link to="/checkout">
            <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
              Checkout
            </button>
          </Link>
          <button
            className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
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
