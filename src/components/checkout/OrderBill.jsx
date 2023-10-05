import React from "react";

const ProductCheckout = () => {
  return (
    <div>
      <section className="text-gray-600     ">
        <div className=" w-96 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="text-2xl font-semibold  text-gray-900  my-2">
              PRICE DETAILS
            </h1>
          </div>
        </div>
        <div className=" w-72 space-y-2  mx-auto ">
          <div className="border-2   pt-3 rounded-lg  border-gray-300 h-12 mx-auto space-x-3 w-full flex   bg-gray-100 bg-opacity-50 ">
            <div className="   w-40   ">
              <h4 className=" font-semibold text-black  mx-5">Subtotal</h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black    ` ">Rs 5000</h4>
            </div>
          </div>
          <div className="border-2  pt-3  rounded-lg border-gray-300 h-12 mx-auto space-x-3 w-full flex    bg-gray-100 bg-opacity-50 ">
            <div className="   w-40  ">
              <h4 className=" font-semibold text-black  mx-5">Tax Price</h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black    ` ">Rs 40</h4>
            </div>
          </div>
          <div className="border-2  pt-3  rounded-lg border-gray-300 h-12 mx-auto space-x-3 w-full flex   bg-gray-100 bg-opacity-50 ">
            <div className="   w-40   ">
              <h4 className=" font-semibold text-black  mx-5">
                Shipping Price
              </h4>
            </div>
            <div>
              <h4 className=" font-semibold text-black    ` ">Rs 50</h4>
            </div>
          </div>
          <hr className=" border-t-2 border-purple-400  w-[100%] border-dashed  " />

          <div className="border-2  pt-3  rounded-lg border-gray-100 h-12 mx-auto space-x-3 w-full flex   bg-white ">
            <div className=" w-40    ">
              <h4 className=" font-semibold text-black  mx-5">Total</h4>
            </div>
            <div>
              <h4 className=" font-semibold text-purple-400    ` ">RS 50000</h4>
            </div>
          </div>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto  mb-2">
          <button className="flex m-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
            Place Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCheckout;
