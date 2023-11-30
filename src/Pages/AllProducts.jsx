import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Filter from "../components/Filter/Filter";
import { BsFilterRight } from "react-icons/bs";
import FilterPage from "../components/Filter/FilterPage";

import { CategoryProduct } from "../utils/filterProducts";
const AllProducts = ({ category, Head }) => {
  // const { products } = useSelector((state) => state.products);
  const [favorite, setFavorite] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define and call productsFunction inside useEffect
    const productsFunction = async () => {
      const result = await CategoryProduct(category);
      setProducts(result);
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
            {Head.title}
          </h1>
          <p className="text-sm font-medium  text-gray-900 my-2">
            {" "}
            {Head.paragraph}
          </p>
        </div>
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-wrap  justify-center items-center ml-3">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="lg:w-3/12 shadow-lg sm:w-2/4 md:w-1/3 h-[31rem] p-4 w-full border-2 mx-2 my-2">
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
                  </div>

                  <div className="flex">
                    {product.sizes.map((p) => {
                      return (
                        <span className="border-2 mx-[2px] border-gray-500 p-1 ">
                          {p}
                        </span>
                      );
                    })}
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
