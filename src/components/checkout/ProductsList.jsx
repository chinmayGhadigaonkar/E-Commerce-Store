import React from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductsList = () => {
  const { cartProduct } = useSelector((state) => state.cart);

  return (
    <>
      <section className="text-gray-600 body-font overflow-y-auto">
        <div className=" py-3 w-full ">
          <div className="lg:w-3/3 w-full  overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Product{" "}
                  </th>
                  {/* <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th> */}
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  {/* <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th> */}
                </tr>
              </thead>
              <tbody>
                {cartProduct.map((product) => {
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
                          <h1 className=" my-2 mx-2">{product.title}</h1>
                        </div>
                      </td>
                      <td className="px-5 ">1</td>
                      <td className="px-5  text-lg text-gray-900">
                        {" "}
                        {product.price}
                      </td>
                    </tr>
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

export default ProductsList;
