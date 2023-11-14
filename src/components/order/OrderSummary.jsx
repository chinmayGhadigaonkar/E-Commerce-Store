import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../store/Slice/orderSlice";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();

  const id = location.pathname.split("/")[2];

  const { order } = useSelector((state) => state.order);

  const { shippingInfo, orderItems, totalPrice } = order;

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold  text-gray-900  my-1">
        Your Order Successfully place
      </h1>
      <div className=" flex  space-x-20">
        <div className="border-2 my-2 space-y-3 w-2/5 ">
          <h1 className="border-b-2 text-xl bg-gray-100 font-bold px-2 py-1  text-gray-900   ">
            Order Detail
          </h1>
          <div>
            <span className=" font-semibold  mx-3 ">Order Id :</span>{" "}
            <span>{order._id}</span>
          </div>
          <div>
            <span className=" font-semibold  mx-3 ">Name : </span>{" "}
            <span>Chinmay Ghadigaonkar</span>
          </div>
          <div className="flex ">
            <div className=" font-semibold  mx-2 ">Address : </div>
            <div className="flex-1 px-1">{shippingInfo.address}</div>
          </div>
          <div>
            <span className=" font-semibold  mx-3 ">City: </span>
            <span> {shippingInfo.city}</span>
          </div>
          <div>
            <span className=" font-semibold  mx-3 ">Phone No : </span>
            <span>{shippingInfo.phoneNo}</span>
          </div>
        </div>
        <div>
          <div className=" py-3 w-full ">
            <div className="lg:w-3/3 w-full  overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Product
                    </th>
                    {/* <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th> */}

                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Price
                    </th>
                    {/* <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th> */}
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((product) => {
                    return (
                      <tr
                        className=" border-b-2 border-gray-300"
                        key={product._id}>
                        <td className="px-2 py-3">
                          <div className="flex ">
                            <img
                              alt="ecommerce"
                              className=" object-fill  h-20 ml-2 w-30 "
                              src={product.img}
                            />{" "}
                            <h1 className=" my-2 mx-2">
                              {product.title} ( 1 )
                            </h1>
                          </div>
                        </td>
                        {/* <td className="px-5 ">1</td> */}
                        <td className="px-5  text-lg text-gray-900">
                          {product.price}
                        </td>
                      </tr>
                    );
                  })}

                  <tr className=" border-b-2 border-gray-300">
                    <td className="px-2 py-3">
                      <div className="flex  mx-2 font-semibold">
                        Total Cost{" "}
                      </div>
                    </td>
                    {/* <td className="px-5 ">1</td> */}
                    <td className="px-5  text-lg text-gray-900 font-semibold">
                      {order.totalPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 w-full">
        <button
          onClick={() => navigator("/")}
          className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
