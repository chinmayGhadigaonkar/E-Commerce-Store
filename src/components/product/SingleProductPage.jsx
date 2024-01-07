import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MultiImg from "./MultiImg";
import { cartFetch } from "../../store/Slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../../config";
import { addToCart } from "../../store/Slice/cartSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AddToWishList, FetchWishList } from "../../store/Slice/wishListSlice";
import { FetchSizeTshirt, tshirtFetch } from "../../store/Slice/productSlice";

const SingleProductPage = () => {
  const [product, setProduct] = useState([]);
  const [ProductImg, setProductImg] = useState([]);
  const [slugproduct, setslugproduct] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const res = await fetch(
        `${VITE_BACKEND_URL}/products/getproduct/${
          location.pathname.split("/")[2]
        }`,
      );
      const { product } = await res.json();
      const data = mapData(product);
      // console.log(data[0]);

      setProduct(data);
      // console.log(data[0].img);
      setProductImg(data[0].img);
    } catch (e) {
      toast.error("Something went's wrong. Please try again");
    }
  };

  const fetchslugproduct = async () => {
    try {
      const res = await fetch(
        `${VITE_BACKEND_URL}/products/getslugproduct/${
          location.pathname.split("/")[2]
        }`,
      );
      const { product } = await res.json();

      setslugproduct(product);
    } catch (e) {
      toast.error("Something went's wrong. Please try again");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      return await fetchslugproduct();
    };
    fetch();
  }, []);

  const [changeIMG, setchangeIMG] = useState();

  const handleOnCart = (product) => {
    if (localStorage.getItem("userInfo")) {
      dispatch(addToCart(product[0]));
    } else {
      toast.error("Plz Login before add to cart");
    }
  };

  const handleOnWishList = (p) => {
    if (localStorage.getItem("userInfo")) {
      dispatch(AddToWishList(p[0]._id));
    }
    toast.success("product is added in whishlist");
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSize = async (Size, product) => {
    const data = {
      Size: Size,
      title: product.title,
    };
    const action = await dispatch(FetchSizeTshirt(data));
    window.location.assign(`/product/${action.payload}`);
  };

  const mapData = (Data) => {
    return Object.keys(Data).map((key) => {
      const tshirt = Data[key];
      return {
        _id: tshirt._id,
        title: tshirt.title,
        slug: tshirt.slug,
        description: tshirt.desc,
        img: tshirt.img,
        category: tshirt.category,
        size: tshirt.sizes,
        color: tshirt.color,
        price: tshirt.price,
        availableQuantity: tshirt.availableQty,
        createdAt: tshirt.createdAt,
        updatedAt: tshirt.updatedAt,
      };
    });
  };

  return (
    <>
      {product.map((p) => {
        return (
          <section
            key={p._id}
            className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-col justify-center items-center ">
                <div className="w-full">
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2  mx-auto w-full lg:h-1/3 h-[100%] object-cover object-center rounded"
                    src={!changeIMG ? p.img[0] : changeIMG}
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
                    {p.title} - ({p.size[0] + "/" + p.color})
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
                  <p className="leading-relaxed">{p.description}</p>
                  <div
                    className={`flex mt-2 items-center pb-2  border-gray-100 mb-5 `}>
                    <div className="flex ml-1 my-2  items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        {p.size.map((size) => {
                          return (
                            <button
                              key={size}
                              onClick={() => handleSize(size, p)}
                              className="border-2 border-gray-200 text-white w-10 py-1 bg-purple-500 rounded-md mx-2  ">
                              {size}
                            </button>
                          );
                        })}

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

                  <div className="sm:flex flex-1    justify-between  my-4">
                    <span className="title-font font-medium text-2xl  text-gray-900">
                      ₹{p.price}
                    </span>
                    <div className="flex my-3 space-x-3">
                      <button
                        disabled={p.availableQty == 0 ? true : false}
                        className={`flex sm:ml-auto text-white bg-purple-500 border-0 py-2 sm:px-6 px-2 focus:outline-none rounded ${
                          p.availableQty == 0
                            ? "bg-purple-50  "
                            : " bg-purple-500 hover:bg-purple-600"
                        } `}
                        onClick={() => {
                          handleOnWishList(slugproduct);
                        }}>
                        Add To WishList
                      </button>

                      <button
                        disabled={p.availableQty == 0 ? true : false}
                        className={`flex sm:ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none rounded ${
                          p.availableQty == 0
                            ? "bg-purple-50  "
                            : " bg-purple-500 hover:bg-purple-600"
                        } `}
                        onClick={() => {
                          handleOnCart(slugproduct);
                        }}>
                        Add To Cart
                      </button>
                    </div>
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
