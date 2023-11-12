import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Filter from "../components/Filter/Filter";
import { BsFilterRight } from "react-icons/bs";
import FilterPage from "../components/Filter/FilterPage";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { CategoryProduct } from "../utils/filterProducts";
const AllProducts = ({ category }) => {
  // const { products } = useSelector((state) => state.products);
  const [favorite, setFavorite] = useState(false);
  const [products, setProducts] = useState([]); // Initialize products state

  useEffect(() => {
    // Define and call productsFunction inside useEffect
    const productsFunction = async () => {
      const result = await CategoryProduct(category);
      setProducts(result); // Update products state with the result
    };
    productsFunction();
  }, [category]);
  const [filterBtn, setFilterBtn] = useState(true);

  return (
    <>
      <FilterPage filterBtn={filterBtn} setFilter={setFilterBtn}></FilterPage>

      <Filter setFilter={setFilterBtn}></Filter>
      <section className="text-gray-900 body-font">
        <div className="container text-center mt-16 ">
          <h1 className="text-2xl font-semibold  text-gray-900  my-2">
            Explore Our Collection
          </h1>
        </div>
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-wrap  justify-center items-center ml-3">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="lg:w-3/12 md:w-1/3 h-[31rem] p-4 w-full border-2 mx-2 my-2">
                  <Link to={`/product/${product.slug}`}>
                    <div className=" rounded overflow-hidden bg-purple-900 flex justify-center items-center cursor-pointer">
                      <img
                        alt="ecommerce"
                        className="object-fit object-center w-full h-[18rem] block"
                        src={product.img[0]}
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-sm font-medium">
                        {product.title}
                      </h2>
                    </div>
                  </Link>
                  <div className="flex">
                    <p className="mt-1">₹ {product.price}</p>
                    {favorite ? (
                      <AiFillHeart
                        onClick={() => {
                          handleOnAddWishList(product._id);
                        }}
                        className="w-6 h-6  text-purple-500 border-none cursor-pointer ml-auto "
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={() => {
                          handleOnRemoveWishList();
                        }}
                        className="w-6 h-6  text-purple-500 border-none cursor-pointer ml-auto "
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
