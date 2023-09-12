import React from "react";
import ShippingInfo from "./ShippingInfo";
import ProductCheckout from "./OrderBill";
import ProductsList from "./ProductsList";

const Checkout = () => {
  return (
    <>
      <h1 className=" text-2xl ml-5 mt-1 ">Chinmay Ghadigaonkar </h1>
      <div className=" flex w-[100%]  items-center border-2  space-x-3 ">
        

        
        {/* <ShippingInfo></ShippingInfo> */}
          <div className="border-2 shadow-lg space-y-2 w-3/5">
            <div>
              <h1>Address</h1>
            </div>
          <ProductsList></ProductsList>
          <ProductsList></ProductsList>
          <ProductsList></ProductsList>
          </div>
        

        <div className=" border-2 w-2/5 border-white ">
          <ProductCheckout></ProductCheckout>
        </div>
      </div>

    
    </>
  );
};

export default Checkout;
