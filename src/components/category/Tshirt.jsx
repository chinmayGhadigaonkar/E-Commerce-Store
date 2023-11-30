import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { tshirtFetch } from "../../store/Slice/productSlice";

const Tshirt = () => {
  const dispatch = useDispatch();
  const [tshirts, setTshirts] = useState([]);

  const fetchData = async () => {
    try {
      const action = await dispatch(tshirtFetch());
      const responseData = action.payload;
      const mappedTshirts = mapTshirtsData(responseData);
      setTshirts(mappedTshirts);
    } catch (error) {
      console.error("Error fetching tshirts:", error);
    }
  };

  const mapTshirtsData = (tshirtsData) => {
    return Object.keys(tshirtsData).map((key) => {
      const tshirt = tshirtsData[key];
      return {
        id: tshirt._id,
        title: tshirt.title,
        slug: tshirt.slug,
        description: tshirt.desc,
        images: tshirt.img,
        category: tshirt.category,
        sizes: tshirt.size,
        colors: tshirt.color,
        price: tshirt.price,
        availableQuantity: tshirt.availableQty,
        createdAt: tshirt.createdAt,
        updatedAt: tshirt.updatedAt,
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]); // Include dispatch as a dependency

  // console.log(tshirts);
  return (
    <>
      <section className="text-gray-900 body-font">
        <div className="container sm:mx-auto text-center mt-16 ">
          <h1 className="text-2xl  font-semibold  text-gray-900  my-2">
            Explore Our T-shirts Collection
          </h1>
          <p className="text-sm font-medium  text-gray-900 my-2">
            {" "}
            Buy T-Shirts at the best price in India. We offer a wide range of
            tshirts for all interests, including coding tshirts, anime tshirts,
            and casual tshirts for everyday wear. All of our tshirts are made
            with high-quality materials and are designed to be comfortable and
            durable. Shop now and find the perfect tshirt for you!
          </p>
        </div>
        <div className="px-5 py-12  mx-auto">
          <div className="flex flex-wrap  justify-center items-center ml-3">
            {tshirts.map((product) => {
              return (
                <div
                  key={product._id}
                  className="lg:w-3/12 shadow-xl md:w-1/3  sm:h-[33rem]  p-4 w-full border-2 mx-2 my-2">
                  <Link to={`/product/${product.slug}`}>
                    <div className="block relative rounded overflow-hidden bg-purple-900 cursor-pointer">
                      <img
                        alt="ecommerce"
                        className="object-fit object-center w-full h-[20rem] block"
                        src={product.images[0]}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-sm font-medium">
                        {product.title}
                      </h2>
                    </div>
                  </Link>
                  <div className="flex">
                    <p className="mt-1">₹ {product.price}</p>
                  </div>

                  <div className="flex">
                    {product.sizes.map((p) => {
                      return (
                        <span className="border-2 mx-[2px] border-gray-500 p-1 ">
                          {p}
                        </span>
                      );
                    })}
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

export default Tshirt;
