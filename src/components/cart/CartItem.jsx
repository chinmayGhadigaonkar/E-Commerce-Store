import React, { useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/Slice/cartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({ product }) => {
  const [QuantityValue, setQuantityValue] = useState(1);
  const dispatch = useDispatch();

  const deleteItem = async (product) => {
    try {
      const res = await fetch(`${VITE_BACKEND_URL}/cart/deleteitem`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          products: product,
        }),
      });
      const { products } = await res.json();
      console.log(products);
    } catch (e) {
      toast.error("Something went's wrong. Please try again");
    }
  };

  const removeBtn = (product) => {
    deleteItem(product);
    dispatch(removeCart(product));
  };
  return (
    <div
      className="img flex ml-2 justify-between items-center"
      key={product._id}>
      <div className=" flex ">
        <img
          alt="ecommerce"
          className=" object-fill w-[80px] border-2 mx-2 h-[80px] "
          src={product.img[0]}
        />
        <h4 className="text-base  mt-2  w-52 font-semibold">{product.title}</h4>
      </div>
      <div>
        <p className="text-base  mt-2  w-22 font-semibold">
          Price:- {product.price}
        </p>
      </div>
      <div className="  space-x-3 mr-3  flex  ">
        <AiFillMinusCircle
          className="my-1 text-purple-500 cursor-pointer text-lg  "
          onClick={() => {
            if (QuantityValue > 1) {
              setQuantityValue((prev) => prev - 1);
            }
          }}
        />
        <span className="mx-2">
          <input
            type="text"
            value={QuantityValue}
            readOnly
            style={{ width: "25px", border: "2px white" }}
          />
        </span>
        <AiFillPlusCircle
          className="my-1 text-purple-500  cursor-pointer  text-lg "
          onClick={() => {
            if (QuantityValue < product.availableQty) {
              setQuantityValue((prev) => prev + 1);
            }
          }}></AiFillPlusCircle>
      </div>
      <div className="mr-3 ">
        <BsTrashFill
          className="h-5 w-6 text-purple-500 cursor-pointer"
          onClick={() => {
            removeBtn(product);
          }}></BsTrashFill>
      </div>
    </div>
  );
};

export default CartItem;
