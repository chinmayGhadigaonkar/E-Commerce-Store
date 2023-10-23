import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchWishList } from "../../store/Slice/wishListSlice";
import WishListItem from "./WishListItem";
// Replace with the correct path

function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistProducts = useSelector((state) => state.wishList.products);
  const status = useSelector((state) => state.wishList.status);
  const products = wishlistProducts.map((item) => item.product);

  useEffect(() => {
    // Fetch wishlist products when the component mounts
    dispatch(FetchWishList())
      .unwrap()
      .catch((error) => {
        console.error("Error fetching wishlist products:", error);
      });
  }, [dispatch]);

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Error loading wishlist products</p>
      ) : (
        <div className="px-5 py-4 mx-auto">
          <div className="container text-center mt-16 ">
            <h1 className="text-2xl font-semibold  text-gray-900  my-2">
              My WishList{" "}
            </h1>
          </div>
          <div className="flex flex-wrap  justify-center items-center ml-3">
            {products.map((product) => {
              return <WishListItem product={product} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
