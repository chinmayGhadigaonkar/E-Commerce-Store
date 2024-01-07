import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../store/Slice/orderSlice";
const AllOrderPage = () => {
  const { cartProduct } = useSelector((state) => state.cart);
  const [order, setOrder] = useState([]);
  const dispatch = useDispatch();

  const fetchOrder = async () => {
    try {
      const action = await dispatch(getAllOrder());
      if (action.payload) {
        setOrder(action.payload);
      }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchOrder();
    };

    fetchData();
  }, []);
  if (!order) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className=" w-96 my-8 mx-auto">
        <div className="flex flex-col   text-center w-full ">
          <h1 className="text-2xl font-semibold  text-gray-900 -ml-12 my-3">
            Your Orders
          </h1>
        </div>
      </div>
      <section className="text-gray-600 body-font overflow-y-auto">
        <div className=" py-3 w-full ">
          <div className="lg:w-2/3  mx-auto my-2 w-full  overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Order Product
                  </th>
                  {/* <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th> */}

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Status
                  </th>
                  {/* <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th> */}
                </tr>
              </thead>
              <tbody>
                {order.map((product) => {
                  return (
                    <>
                      <tr
                        className=" border-b-2 border-gray-300"
                        key={product._id}>
                        <td className="px-2 py-3">
                          {product.orderItems.map((item) => {
                            return (
                              <div className="sm:flex my-2 ">
                                <img
                                  alt="ecommerce"
                                  className=" object-fit object-center w-[5rem] h-[5rem] block "
                                  src={item.img[0]}
                                />{" "}
                                <h1 className=" my-2 mx-2">{item.title}</h1>
                              </div>
                            );
                          })}
                        </td>
                        <td className="px-5  text-lg text-gray-900">
                          <h2
                            className={` ${
                              product.orderStatus === "Processing"
                                ? "bg-red-700"
                                : "bg-green-400"
                            } w-28   text-white text-center border-none rounded-md`}>
                            {product.orderStatus}
                          </h2>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllOrderPage;
