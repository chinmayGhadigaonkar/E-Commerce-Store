import React from "react";

const ShippingInfo = () => {
  const handleChange = () => {};
  return (
    <>
      <h1 className=" text-2xl ml-5 mt-1 ">Chinmay Ghadigaonkar </h1>
     
      <section className="text-gray-600 body-font relative">
        <div className="  py-8 ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl font-semibold  text-gray-900  my-2">
              Add Details
            </h1>
          </div>
          <div className="lg:w-2/3 md:w-3/3  mx-auto">
            <div className="flex flex-col justify-center items-center flex-wrap -m-2">
              <div className="  flex  justify-between p-2 md:w-5/6 space-x-5 w-4/5 ">
                <div className="w-[23rem]">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-[23rem]">
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm text-gray-600">
                    city
                  </label>
                  <input
                    type="city"
                    id="city"
                    name="city"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className=" flex  justify-between p-2 md:w-5/6 space-x-5 w-4/5 ">
              <div className="w-[23rem]">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-600">
                      state
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-[23rem]">
                  <label
                    htmlFor="country"
                    className="leading-7 text-sm text-gray-600">
                      country
                  </label>
                  <input
                    type="country"
                    id="country"
                    name="country"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className=" flex  justify-between p-2 md:w-5/6 space-x-5 w-4/5 ">  
                <div className="w-[23rem]">
                  <label
                    htmlFor="pinCode"
                    className="leading-7 text-sm text-gray-600">
                      pinCode
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 required  />
                </div>
                <div className="w-[23rem]">
                  <label
                    htmlFor="phoneNo"
                    className="leading-7 text-sm text-gray-600">
                    phoneNo
                  </label>
                  <input
                    type="text"
                    id="phoneNo"
                    name="phoneNo"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               required    />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingInfo;
