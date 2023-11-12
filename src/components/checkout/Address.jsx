import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../../store/Slice/addressSlice";

const Address = () => {
  const [add, setAdd] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phoneNo: "",
  });
  const dispatch = useDispatch();

  const handleonAddress = (data) => {
    dispatch(addAddress(add));
  };

  const handleChange = (event) => {
    setAdd({ ...add, [event.target.name]: [event.target.value] });
  };
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container md:px-5 py-2 md:py-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl font-semibold  text-gray-900  my-1">
              Address
            </h1>
          </div>
          <div className="lg:w-2/2 md:w-3/3  mx-auto">
            <div className="flex flex-col justify-center items-center flex-wrap sm:-m-2">
              <div className="p-2 flex  md:w-5/5 w-5/5 px-3 space-x-2 ">
                <div className="w-3/6">
                  <label
                    htmlFor="Address"
                    className="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={add.address}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-3/6">
                  <label
                    htmlFor="City"
                    className="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={add.city}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 flex  md:w-5/5 w-5/5 px-3 space-x-2 ">
                <div className="w-3/6">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-600">
                    state
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={add.state}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-3/6">
                  <label
                    htmlFor="country"
                    className="leading-7 text-sm text-gray-600">
                    country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={add.country}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 flex  md:w-5/5 w-5/5 px-3 space-x-2 ">
                <div className="w-3/6">
                  <label
                    htmlFor="pinCode"
                    className="leading-7 text-sm text-gray-600">
                    pinCode
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    value={add.pinCode}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-3/6">
                  <label
                    htmlFor="phone no"
                    className="leading-7 text-sm text-gray-600">
                    phoneNo
                  </label>
                  <input
                    type="text"
                    id="phoneNo"
                    name="phoneNo"
                    value={add.phoneNo}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 text-black  leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={() => {
                    handleonAddress(add);
                  }}
                  className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
