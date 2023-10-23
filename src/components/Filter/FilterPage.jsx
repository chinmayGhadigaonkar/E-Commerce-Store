import React, { useState } from "react";
import { VITE_BACKEND_URL } from "../../config";
import { ImCross } from "react-icons/im";
const FilterPage = ({ filterBtn , setFilter}) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (selectedCategory ) => {
    setCategory(selectedCategory);
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${VITE_BACKEND_URL}/filter/products?category=${category}&minPrice=0&maxPrice=${rangeValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (res.ok) {
        const data = await res.json();
      
        // Handle the fetched data as needed
      } else {
        console.error("Failed to fetch data from the server");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };


  return (
    <>
  
      <div
        className={`w-80 bg-purple-600 text-white px-3 py-10 absolute left-0 h-[100vh] z-50 transition-transform duration-500 ${
          filterBtn
            ? ` -translate-x-[1000px] visible hidden `
            : ` translate-x-0 `
        }`}
      >
        <ImCross 
          onClick={() => setFilter(true)}
          className="absolute right-4 top-8 text-lg text-white cursor-pointer "  ></ImCross>
        <h5 className="text-xl font-bold">Filter</h5>
        <div className="ml-5 my-3">
          <h6 className="text-lg font-semibold">Category</h6>
          <div className="px-3 p-2 text-md text-white">
            <input
              type="checkbox"
              name="category"
              value="T-shirts"
              onChange={() => handleCategoryChange("T-shirts")}
            />
            <label htmlFor="" className="ml-1 cursor-pointer">
              T-shirts
            </label>
            <br />
            <input
              type="checkbox"
              value="Mugs"
              name="category"
              onChange={() => handleCategoryChange("Mugs")}
            />
            <label htmlFor="" className="ml-1 cursor-pointer">
              Mugs
            </label>
            <br />
            <input
              type="checkbox"
              value="Caps"
              name="category"
              onChange={() => handleCategoryChange("Caps")}
            />
            <label htmlFor="" className="ml-1 cursor-pointer">
              Caps
            </label>
          </div>

          <div className="my-3">
            <h6 className="my-2 text-lg font-semibold">Price</h6>
            <p htmlFor="" className="text-center w-52">
              Range 0-{rangeValue}
            </p>
            <div className="w-72">
              <label htmlFor="" className="mx-1">
                0
              </label>

              <input
                type="range"
                min={0}
                max={5000}
                className="w-44 bg-white"
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
              />
              <label htmlFor="" className="mx-1">
                100000
              </label>
            </div>
          </div>
          <button className=" border-2 w-36 h-10  my-3" onClick={fetchData}>Apply Filters</button>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
