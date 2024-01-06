import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchWishList } from "../../store/Slice/wishListSlice";
import WishListItem from "./WishListItem";
// Replace with the correct path

function WishlistPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.wishList);
  const status = useSelector((state) => state.wishList.status);
  const product = products.map((item) => item.product);

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Error loading wishlist products</p>
      ) : (
        <div className="px-5 py-4 mx-auto">
          {products == null ? (
            <div className="container text-center mt-16 ">
              <h1 className={`text-2xl font-semibold  text-gray-900  my-2 `}>
                My WishList{" "}
              </h1>
            </div>
          ) : (
            <div className="container text-center mt-16 ">
              <h1 className={`text-2xl font-semibold  text-gray-900  my-2 `}>
                Your Wishlist is Empty
              </h1>
            </div>
          )}

          <div className="flex flex-wrap  justify-center items-center ml-3">
            {product.map((product) => {
              return <WishListItem product={product} key={product._id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
