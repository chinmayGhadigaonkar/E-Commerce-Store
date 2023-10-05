import React, { useState } from "react";
import { useSelector } from "react-redux";
import { VITE_BACKEND_URL } from "../../config";

const FilterPage = ({filterBtn}) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [category , setCatgory]= useState("");
 
  const handleonCategory=(category,rangeValue)=>{
    fetch(category ,rangeValue);
  }

  const fetch = async(category,rangeValue)=>{
    const res =await fetch(`${VITE_BACKEND_URL}/filter/products?category=${category}&minPrice=0&maxPrice=${rangeValue}`,{
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })

    const data = await res.json();
    console.log(data);

  }


 
  return (
    <>
      <div className={`w-80  bg-purple-600  text-white px-3 py-10 absolute left-0 h-full transition-transform duration-500 ${filterBtn ? ` -translate-x-[1000px] visible hidden ` : ` translate-x-0  `
        }`}>
        <h5 className=" text-xl font-bold">Filter</h5>
        <div className="ml-5 my-3">
          <h6 className=" text-lg  font-semibold ">Category</h6>
          <div className=" px-3 p-2  text-md text-white ">
            <input type="checkbox" className=""  name="category" value="Tshirts"   />
            <label htmlFor="" className="ml-1 cursor-pointer"   onClick={handleonCategory("T-shirts" ,rangeValue)}>
              T-shirts
            </label>
            <br />
            <input type="checkbox"  value="Mugs"   name="category"  />
            <label htmlFor="" className="ml-1  cursor-pointer"    onClick={()=>{setCatgory("Mugs") ,fetch()}}>
              Mugs
            </label>
            <br />
            <input type="checkbox"   value="Caps"   name="category"     />
            <label htmlFor="" className="ml-1 cursor-pointer"    onClick={()=>{setCatgory("Caps") ,fetch()}}>
              Caps
            </label>
          </div>

          <div className="my-3 ">
            <h6 className="my-2  text-lg  font-semibold">Price</h6>
            <p htmlFor="" className="text-center  w-52 ">
              Range 0-{rangeValue}
              </p>
            <div className=" w-72 ">
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
        </div>
      </div>
    </>
  );
};

export default FilterPage;
