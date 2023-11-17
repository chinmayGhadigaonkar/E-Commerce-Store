import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchWishList,
  RemoveFromWishList,
} from "../../store/Slice/wishListSlice";
import toast from "react-hot-toast";

const WishListItem = ({ product }) => {
  const dispatch = useDispatch();
  // const wishlistProducts = useSelector((state) => state.wishList.products)

  const handleonRemoveItem = (_id) => {
    dispatch(RemoveFromWishList(_id));
    toast.success("Item is remove from cart");
  };
  return (
    <div className="lg:w-3/12 md:w-1/3  lg:h-[32rem]  p-4 w-full border-2 mx-2 my-2">
      <Link to={`/product/${product.slug}`}>
        <div className="block relative rounded overflow-hidden bg-purple-900 cursor-pointer">
          <img
            alt="ecommerce"
            className="object-fit object-center w-full h-[20rem] block"
            src={product.img[0]}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
            {product.category}
          </h3>
          <h2 className="text-gray-900 title-font text-sm font-medium">
            {product.title}
          </h2>
          {/* <p className="mt-1">₹ {product.price}</p> */}
        </div>
      </Link>
      <div className="flex justify-between">
        <p className="mt-1">₹ {product.price}</p>
        <div className="">
          <button
            type="button"
            onClick={() => handleonRemoveItem(product._id)}
            className="flex ml-auto  text-purple-500  border-0 py-1 px-2 focus:outline-none  rounded text-lg ">
            {" "}
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
