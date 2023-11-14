import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MultiImg from "./MultiImg";
import { cartFetch } from "../../store/Slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../../config";
import { addToCart } from "../../store/Slice/cartSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const SingleProductPage = () => {
  const [product, setProduct] = useState([]);
  const [ProductImg, setProductImg] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();

  const fetchdata = async () => {
    try {
      const res = await fetch(
        `${VITE_BACKEND_URL}/products/getproduct/${
          location.pathname.split("/")[2]
        }`,
      );
      const { product } = await res.json();
      setProduct(product);
      setProductImg(product[0].img);
    } catch (e) {
      toast.error("Something went's wrong. Please try again");
    }
  };

  const [changeIMG, setchangeIMG] = useState();

  const handleOnCart = (product) => {
    if (localStorage.getItem("userInfo")) {
      dispatch(addToCart(product));
    } else {
      toast.error("Plz Login before add to cart");
    }

    // dispatch(calTotalPrice(product.price))
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {product.map((p) => {
        return (
          <section
            key={p._id}
            className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div>
                <AiOutlineHeart className="w-10 h-10  text-purple-500 border-none cursor-pointer ml-auto " />
              </div>
              <div className="lg:w-4/5 mx-auto flex flex-col justify-center items-center ">
                <div className="w-full">
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2  mx-auto w-full lg:h-1/3 h-[100%] object-cover object-center rounded"
                    src={!changeIMG ? p.img : changeIMG}
                  />
                </div>
                <div className="flex  justify-between items-center space-x-2">
                  {ProductImg.map((img) => {
                    return (
                      <MultiImg
                        key={img}
                        IMG={img}
                        setchangeIMG={setchangeIMG}></MultiImg>
                    );
                  })}
                </div>
                <div className="lg:w-2/2 w-full lg:pt-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    E-Commerce Store
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {p.title}
                  </h1>

                  <h1
                    className={`text-red-400 text-xl ${
                      p.availableQty == 0 ? "static" : "hidden"
                    }  font-sm my-2`}>
                    currently out off stock
                  </h1>

                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-purple-500"
                        viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-purple-500"
                        viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-purple-500"
                        viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-purple-500"
                        viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-purple-500"
                        viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">{p.desc}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ₹{p.price}
                    </span>
                    <div></div>

                    <button
                      disabled={p.availableQty == 0 ? true : false}
                      className={`flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none rounded ${
                        p.availableQty == 0
                          ? "bg-purple-50  "
                          : " bg-purple-500 hover:bg-purple-600"
                      } `}
                      onClick={() => {
                        handleOnCart(p);
                      }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SingleProductPage;
