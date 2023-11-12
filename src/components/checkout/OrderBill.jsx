import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCheckout = () => {
  const { productTPrice } = useSelector((state) => state.cart);
  return (
    <div>
      <section className=" ">
        <div className=" w-96  mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="text-2xl font-semibold  text-gray-900 -ml-12 my-3">
              Bill Detail
            </h1>
          </div>
        </div>
        <div className=" w-72  space-y-2  mx-auto ">
          <div className="   pt-3 rounded-lg   h-12 mx-auto space-x-3 w-full flex   bg-opacity-50 ">
            <div className="   w-40   ">
              <h4 className=" font-semibold text-black  mx-5">Subtotal</h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black    ` ">
                Rs {productTPrice}
              </h4>
            </div>
          </div>
          <div className=" pt-3  rounded-lg  h-12 mx-auto space-x-3 w-full flex     bg-opacity-50 ">
            <div className="   w-40  ">
              <h4 className=" font-semibold text-black  mx-5">Tax Price</h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black    ` ">Rs 40</h4>
            </div>
          </div>
          <div className=" pt-3  rounded-lg  h-12 mx-auto space-x-3 w-full flex  bg-opacity-50 ">
            <div className="   w-40   ">
              <h4 className=" font-semibold text-black  mx-5">
                Shipping Price
              </h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black ">Rs 50</h4>
            </div>
          </div>

          <div className="w-full px-4">
            <hr className=" border-t-2 border-gray-500   border-solid  " />
          </div>
          <div className="    pt-3  rounded-lg  h-12 mx-auto space-x-3 w-full flex  ">
            <div className=" w-40    ">
              <h4 className=" font-semibold text-black  mx-5">Total</h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black    ` ">
                RS {productTPrice + 40 + 50}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCheckout;
