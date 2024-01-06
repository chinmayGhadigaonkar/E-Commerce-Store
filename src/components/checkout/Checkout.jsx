import React, { useState } from "react";
import ProductCheckout from "./OrderBill";
import ProductsList from "./ProductsList";
import Address from "./Address";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAddress } from "../../store/Slice/addressSlice";
import { createOrder } from "../../store/Slice/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/Slice/cartSlice";
import toast from "react-hot-toast";
import { updateQuantity } from "../../store/Slice/productSlice";

const Checkout = ({ setChildren, setShowModal }) => {
  const { address } = useSelector((state) => state.address);
  const { cartProduct, productTPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [orderAddress, SetOrderAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAddress());
  }, []);
  // console.log(orderAddress);

  const taxPrice = 40;
  const shippingPrice = 50;

  const handleOnOrder = async (
    orderAddress,
    taxPrice,
    shippingPrice,
    productTPrice,
  ) => {
    if (orderAddress && cartProduct) {
      const totalPrice = parseInt(productTPrice + taxPrice + shippingPrice);
      const data = {
        shippingInfo: orderAddress,
        orderItems: cartProduct,
        taxPrice: 40,
        shippingPrice: 50,
        totalPrice: totalPrice,
      };

      const action = await dispatch(createOrder(data));

      //  for getting id for order summary
      const orderId = action.payload._id;
      //  update quantity
      const orderItems = action.payload.orderItems;
      navigate(`/orderSummary/${orderId}`);
      for (let index = 0; index < orderItems.length; index++) {
        dispatch(updateQuantity(orderItems[index]._id));
      }
      dispatch(clearCart());

      toast.success("Your order is successfully place ");
    } else {
      toast.error("Plz add address before place the order");
    }
  };

  return (
    <>
      <div className=" my-6  px-10">
        <h1 className=" text-2xl  my-1">
          {JSON.parse(localStorage.getItem("userInfo"))}
        </h1>

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
                  id="address"
                  name="address"
                />{" "}
                <label htmlFor="address">
                  {" "}
                  {info.address} , {info.city}-{info.pinCode} , {info.state}
                </label>
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
                    orderAddress,
                    cartProduct,
                    taxPrice,
                    shippingPrice,
                    productTPrice,
                  )
                }
                disabled={cartProduct == 0 && address != null}
                className={`flex m-auto text-white  border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded ${
                  cartProduct == 0 && address != null
                    ? "bg-purple-300 "
                    : "bg-purple-500"
                }`}>
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
