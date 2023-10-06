import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const { products } = location.state;
<<<<<<< HEAD

=======
>>>>>>> parent of a4dff47 (Revert "filter working")
 
  return (
    <>
      
      <section className="text-gray-900 body-font ">
        {
         products!=0?(
          <div>
          <h4 className="w-[70%] text-2xl font-semibold  text-gray-900  my-12 mx-auto">Your search products.. </h4>
        </div>
         ):(
          <div>
              <h4 className="w-[70%] text-2xl font-semibold  text-gray-900  my-8 mx-auto">Sorry !!! Product is not our list </h4>
          </div>
         )
        }
       
      <div className="container px-5 py-1 mx-auto">
      <div className="flex flex-wrap  item-center w-[75%]   mx-auto  ">
        {
          
          products.map((product) => {
            return (
              <div key={product._id} className="lg:w-[30%] md:w-2/3  p-4 w-full border-2 border-gray-20  rounded-md mx-1 my-2">
                <Link to={`/product/${product.slug}`}>
                  <div className=" rounded overflow-hidden bg-purple-900 flex justify-center items-center cursor-pointer">
                    <img
                      alt="ecommerce"
                      className="object-fit object-center w-full h-[20rem] block"
                      src={product.img[0]}
                    />
                  </div>
                  <div className="mt-4 w-4/4">
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
          })
            
          
      
          
        }
          
        </div>
      </div>
      </section>

      
    </>
  );
};

export default SearchPage;
