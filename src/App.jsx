import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar";
import Filter from "./components/Filter/Filter";
import Footer from "./components/common/Footer";
import SingleProductPage from "./components/product/SingleProductPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productFetch } from "./store/Slice/productSlice";
import Checkout from "./components/checkout/Checkout";
import { cartFetch } from "./store/Slice/cartSlice";
import AllProducts from "./Pages/AllProducts";
import SearchPage from "./components/common/SearchPage";
import WishList from "./components/wishList/wishList";
import { Modal } from "./components/common/Modal";
import Page_404 from "./Pages/Page_404";
import OrderSummary from "./components/order/OrderSummary";
import { FetchWishList } from "./store/Slice/wishListSlice";
import AllOrderPage from "./components/order/AllOrderPage";
import ProductFliter from "./components/Filter/ProductFliter";
import ProtectedRoutes from "./components/common/ProtectedRoutes";

Filter;

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const isAuthenticate = user ? true : false;

  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState(<>Model</>);

  // const {userInfo} = useSelect(state => state.userInfo)
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(productFetch());
    dispatch(cartFetch());
    dispatch(FetchWishList());
  }, []);

  const tshirtHead = {
    title: "Explore Our T-shirts Collection",
    paragraph: `Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts,
    and casual tshirts for everyday wear. All of our tshirts are made
    with high-quality materials and are designed to be comfortable and
    durable. Shop now and find the perfect tshirt for you! `,
  };
  const SweatshirtsHead = {
    title: "Explore Our Sweatshirts Collection",
    paragraph: `Our sweatshirts are perfect for every occasion, whether you're looking for a casual everyday sweatshirt or something to wear to the gym. We have a variety of styles to choose from, including coding sweatshirts, anime sweatshirts, and casual sweatshirts for everyday wear. All of our sweatshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect sweatshirt for you! `,
  };
  const capHead = {
    title: "Explore Our Caps Collection",
    paragraph: `Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect cap for you! `,
  };

  return (
    <HashRouter>
      <Navbar />
      <Modal
        children={children}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/Tshirt"
          element={
            <AllProducts category="T-shirt" Head={tshirtHead}></AllProducts>
          }></Route>
        <Route
          path="/Sweatshirts"
          element={
            <AllProducts
              category="Sweatshirts"
              Head={SweatshirtsHead}></AllProducts>
          }></Route>
        <Route
          path="/Caps"
          element={
            <AllProducts category="Caps" Head={capHead}></AllProducts>
          }></Route>
        <Route
          path="/product/:slug"
          element={<SingleProductPage></SingleProductPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* <Route path="/filterproduct" element={<ProductFliter />}></Route> */}
        <Route path="/search" element={<SearchPage />}></Route>

        <Route element={<ProtectedRoutes isAuthenticate={isAuthenticate} />}>
          <Route path="/wishList" element={<WishList />}></Route>
          <Route path="/ordersummary/:id" element={<OrderSummary />}></Route>
          <Route path="/allorder" element={<AllOrderPage />}></Route>
          <Route
            path="/checkout"
            element={
              <Checkout setChildren={setChildren} setShowModal={setShowModal} />
            }></Route>
        </Route>

        <Route path="*" element={<Page_404 />}></Route>
      </Routes>

      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
