import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const { products } = location.state;

  return (
    <>
      <section className="text-gray-900 body-font ">
        {products != 0 ? (
          <div>
            <h4 className=" text-2xl  font-semibold  text-gray-900  my-12 mx-4">
              Your search products..{" "}
            </h4>
          </div>
        ) : (
          <div>
            <h4 className="w-[70%] text-2xl font-semibold  text-gray-900  my-8 mx-auto">
              Sorry !!! Product is not our list{" "}
            </h4>
          </div>
        )}

        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-wrap  item-center mx-auto  ">
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
                  <div className="">
                    <p className="mt-1">₹ {product.price}</p>

                    <span className="border-2 mx-[2px] border-gray-500 p-1 ">
                      {product.size}
                    </span>
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

export default SearchPage;
