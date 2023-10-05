import React from "react";

const ProductsList = () => {
  return (
    <>
      <div className=" border-b-2 my-4  ">
        <div className="img flex ml-2 my-2 justify-between items-center">
          <div className=" flex ">
            <img
              alt="ecommerce"
              className=" object-fill w-[120px] border-2 mx-2 h-[120px] "
              src="https://rukminim2.flixcart.com/image/416/416/l5ld8y80/smartwatch/n/i/m/-original-imagg8dddyyzjnxn.jpeg?q=70"
            />
            <div>
              <h4 className="text-base  mt-2   font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                repellat laudantium corrupti ratione quis
              </h4>
              <div>
                <p className="text-base  mt-2  w-22 font-semibold">
                  Price:- ₹ 500
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mr-1 ">
        <BsTrashFill
          className="h-5 w-6 text-purple-500 cursor-pointer"
          onClick={() => {
            removeBtn(product);
          }}></BsTrashFill>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
