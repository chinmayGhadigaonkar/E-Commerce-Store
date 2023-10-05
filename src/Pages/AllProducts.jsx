import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../components/Filter/Filter";
import { BsFilterRight } from "react-icons/bs";
import FilterPage from "../components/Filter/FilterPage";
const AllProducts = () => {
  const { products } = useSelector((state) => state.products);
  const [filter, setFilter] = useState(false);
  console.log(filter);
  return (
    <>
    
        <FilterPage filter={filter}></FilterPage>
      
      <Filter setFilter={setFilter}></Filter>
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
                  className="lg:w-3/12 md:w-1/3 h-[35rem] p-4 w-full border-2 mx-2 my-2">
                  <Link to={`/product/${product.slug}`}>
                    <div className=" rounded overflow-hidden bg-purple-900 flex justify-center items-center cursor-pointer">
                      <img
                        alt="ecommerce"
                        className="object-fit object-center w-full h-[20rem] block"
                        src={product.img[0]}
                      />
                    </div>
                    <div className="mt-4 w-3/4">
                      <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-sm   font-medium">
                        {product.title}
                      </h2>
                      <p className="mt-1">₹ {product.price}</p>
                    </div>
                  </Link>
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
