import React, { useState } from "react";
import ShippingInfo from "./ShippingInfo";
import ProductCheckout from "./OrderBill";
import ProductsList from "./ProductsList";
import Address from "./Address";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAddress } from "../../store/Slice/addressSlice";
import { createOrder } from "../../store/Slice/orderSlice";

const Checkout = ({ setChildren, setShowModal }) => {
  const { address } = useSelector((state) => state.address);
  const { cartProduct, productTPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [orderAddress, SetOrderAddress] = useState("");
  // const [order, setOrder] = useState({
  //   address: "",
  //   product: "",
  //   taxPrice: "",
  //   shippingPrice: "",
  //   subtotal: "",
  // });

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  const taxPrice = 40;
  const shippingPrice = 50;

  const handleOnOrder = (
    cartProduct,
    taxPrice,
    shippingPrice,
    productTPrice,
  ) => {
    productTPrice = productTPrice + shippingPrice + taxPrice;
    dispatch(
      createOrder(
        orderAddress,
        cartProduct,
        taxPrice,
        shippingPrice,
        productTPrice,
      ),
    );
  };

  return (
    <>
      <div className=" my-6  px-10">
        <h1 className=" text-2xl  my-1">Chinmay Ghadigaonkar</h1>

        <div className="my-4 ml-2">
          {address.map((info) => {
            return (
              <div key={info._id}>
                <input
                  type="radio"
                  value={orderAddress}
                  onClick={() => {
                    SetOrderAddress(info);
                  }}
                />{" "}
                {info.address} , {info.city}-{info.pinCode} , {info.state}
                <br />
              </div>
            );
          })}
        </div>
        <button
          className=" my-2 ml-2 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
          onClick={() => {
            setShowModal(true);
            setChildren(<Address />);
          }}>
          Add Address
        </button>
        {/* <Address></Address> */}
        <div className="  items-center   ">
          {/* <ShippingInfo></ShippingInfo> */}
          <div className=" space-y-2 ">
            <ProductsList></ProductsList>
          </div>

          <div className=" sm:mr-auto mt-5 md:w-3/5 lg:w-1/3 w-full   border-2 border-gray-300 rounded-xl ">
            <ProductCheckout></ProductCheckout>
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto  mb-2">
              <button
                onClick={() =>
                  handleOnOrder(
                    cartProduct,
                    taxPrice,
                    shippingPrice,
                    productTPrice,
                  )
                }
                className="flex m-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
