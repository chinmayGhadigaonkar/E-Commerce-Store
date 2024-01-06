import React, { useEffect, useState } from "react";
import { VITE_BACKEND_URL } from "../../config";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const FilterPage = ({ filterBtn, setFilter }) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const navigate = useNavigate();
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSizeChange = (size) => {
    if (selectedSize.includes(size)) {
      setSelectedSize(selectedSize.filter((s) => s !== size));
    } else {
      setSelectedSize([...selectedSize, size]);
    }
  };

  const fetchData = async () => {
    try {
      const categoryQuery = selectedCategories.join(",");
      const sizeQuery = selectedSize.join(",");

      const res = await fetch(
        `${VITE_BACKEND_URL}/filter/products?categories=${categoryQuery}&minPrice=0&maxPrice=${rangeValue}&sizes=${sizeQuery} `,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (res.ok) {
        const data = await res.json();
        navigate("/filterproduct", {
          state: {
            data,
          },
        });
        // Handle the fetched data as needed
      } else {
        console.error("Failed to fetch data from the server");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(fetchData(), 800);

    return clearTimeout(debounce);
  }, [selectedCategories, rangeValue, selectedSize]);

  return (
    <>
      <div
        className={`w-80 bg-purple-600 text-white px-3 py-10 fixed left-0 h-[100vh] z-50 transition-transform duration-500 ${
          filterBtn
            ? ` -translate-x-[1000px] visible hidden `
            : ` translate-x-0 `
        }`}>
        <ImCross
          onClick={() => setFilter(true)}
          className="absolute right-4 top-8 text-lg text-white cursor-pointer "
        />
        <h5 className="text-xl font-bold">Filter</h5>
        <div className="ml-5 my-3">
          <h6 className="text-lg font-semibold">Category</h6>
          <div className="px-3 p-2 text-md text-white">
            <input
              type="checkbox"
              name="category"
              value="all"
              id="allcategory"
              onChange={() => handleCategoryChange("all")}
              checked={selectedCategories.includes("All")}
            />
            <label htmlFor="allcategory" className="ml-1 cursor-pointer">
              All
            </label>
            <br />
            <input
              type="checkbox"
              name="category"
              value="T-shirts"
              id="tshirt"
              onChange={() => handleCategoryChange("T-shirt")}
              checked={selectedCategories.includes("T-shirt")}
            />
            <label htmlFor="tshirt" className="ml-1 cursor-pointer">
              T-shirts
            </label>
            <br />
            <input
              type="checkbox"
              value="Sweatshirts"
              name="category"
              id="Sweatshirts"
              onChange={() => handleCategoryChange("Sweatshirts")}
              checked={selectedCategories.includes("Sweatshirts")}
            />
            <label htmlFor="Sweatshirts" className="ml-1 cursor-pointer">
              Sweatshirts
            </label>
            <br />
            <input
              type="checkbox"
              value="Caps"
              id="Caps"
              name="category"
              onChange={() => handleCategoryChange("Caps")}
              checked={selectedCategories.includes("Caps")}
            />
            <label htmlFor="Caps" className="ml-1 cursor-pointer">
              Caps
            </label>
          </div>

          <h6 className="text-lg font-semibold">Size</h6>
          <div className="px-3 p-2 text-md text-white">
            <input
              type="checkbox"
              name="size"
              value="size"
              id="allsize"
              onChange={() => handleSizeChange("ALL")}
              checked={selectedSize.includes("All")}
            />
            <label htmlFor="allsize" className="ml-1 cursor-pointer">
              All
            </label>
            <br />
            <input
              type="checkbox"
              name="size"
              value="S"
              id="S"
              onChange={() => handleSizeChange("S")}
              checked={selectedSize.includes("S")}
            />
            <label htmlFor="S" className="ml-1 cursor-pointer">
              S
            </label>
            <br />

            <input
              type="checkbox"
              name="size"
              value="M"
              id="M"
              onChange={() => handleSizeChange("M")}
              checked={selectedSize.includes("M")}
            />
            <label htmlFor="M" className="ml-1 cursor-pointer">
              M
            </label>
            <br />
            <input
              type="checkbox"
              name="size"
              value="L"
              id="L"
              onChange={() => handleSizeChange("L")}
              checked={selectedSize.includes("L")}
            />
            <label htmlFor="L" className="ml-1 cursor-pointer">
              L
            </label>
            <br />

            <input
              type="checkbox"
              name="size"
              value="XL"
              id="XL"
              onChange={() => handleSizeChange("XL")}
              checked={selectedSize.includes("XL")}
            />
            <label htmlFor="XL" className="ml-1 cursor-pointer">
              XL
            </label>
            <br />

            <input
              type="checkbox"
              name="size"
              value="XXL"
              id="XXL"
              onChange={() => handleSizeChange("XXL")}
              checked={selectedSize.includes("XXL")}
            />
            <label htmlFor="XXL" className="ml-1 cursor-pointer">
              XXL
            </label>
            <br />
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
        </div>
      </div>
    </>
  );
};

export default FilterPage;
