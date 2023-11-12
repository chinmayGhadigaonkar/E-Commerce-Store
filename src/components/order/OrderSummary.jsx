import React from "react";

const OrderSummary = () => {
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
            <span>d21ads12331da323a2sd23ads312</span>
          </div>
          <div>
            <span className=" font-semibold  mx-3 ">Name : </span>{" "}
            <span>Chinmay Ghadigaonkar</span>
          </div>
          <div className="flex ">
            <div className=" font-semibold  mx-2 ">Address : </div>
            <div className="border-2 flex-1 px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              adipisci aspernatur! Perspiciatis fugit facilis maxime distinctio
              libero consectetur ration
            </div>
          </div>
          <div>
            <span className=" font-semibold  mx-3 ">City: </span>
            <span> Mumbai</span>
          </div>
          <div>
            <span className=" font-semibold  mx-3 ">Phone No : </span>
            <span>0000000000</span>
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
                  <tr className=" border-b-2 border-gray-300">
                    <td className="px-2 py-3">
                      <div className="flex ">
                        <img
                          alt="ecommerce"
                          className=" object-fill  h-20 ml-2 w-30 "
                          src="https://m.media-amazon.com/images/I/8125LL1N2OL._UY550_.jpg"
                        />{" "}
                        <h1 className=" my-2 mx-2">
                          Boldfit Head Caps for Men ( 1 )
                        </h1>
                      </div>
                    </td>
                    {/* <td className="px-5 ">1</td> */}
                    <td className="px-5  text-lg text-gray-900">3555</td>
                  </tr>
                  <tr className=" border-b-2 border-gray-300">
                    <td className="px-2 py-3">
                      <div className="flex  mx-2 font-semibold">Total</div>
                    </td>
                    {/* <td className="px-5 ">1</td> */}
                    <td className="px-5  text-lg text-gray-900 font-semibold">
                      500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 w-full">
        <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
