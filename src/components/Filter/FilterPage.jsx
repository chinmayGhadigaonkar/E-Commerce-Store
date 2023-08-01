import React from "react";

const FilterPage = () => {
  return (
    <>
      <div className=" border-2  px-3 py-3 absolute left-0 h-full">
        <h5 className=" text-xl font-bold">Filter</h5>
        <div className="ml-5 my-3">
          <h6 className=" text-lg  font-semibold ">Category</h6>
          <div className=" px-3 p-2  text-md text-black ">
            <input type="checkbox" className="" />
            <label htmlFor="" className="ml-1">
              T-shirts
            </label>{" "}
            <br />
            <input type="checkbox" />
            <label htmlFor="" className="ml-1">
              Mugs
            </label>{" "}
            <br />
            <input type="checkbox" />
            <label htmlFor="" className="ml-1">
              Caps
            </label>
          </div>

          <div className="my-3 ">
            <h6 className="my-2  text-lg  font-semibold">Price</h6>
            <div className="w-96">
              <label htmlFor="" className="mx-1">
                0
              </label>
              <input
                type="range"
                name=""
                id=""
                min={0}
                max={100000}
                className="w-52 bg-black  "
              />
              <label htmlFor="" className="mx-1">
                100000
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
