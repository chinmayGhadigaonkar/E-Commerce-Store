import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tshirt from "./components/category/Tshirt";
import Home from "./Pages/Home";
import Mugs from "./components/category/Mugs";
import Navbar from "./components/common/Navbar";
import Filter from "./components/Filter/Filter";
import Caps from "./components/category/Caps";
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

function App() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState(<>Model</>);

  // const {userInfo} = useSelect(state => state.userInfo)
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(productFetch());
    dispatch(cartFetch());
  }, []);

  return (
    <BrowserRouter>
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
          element={<AllProducts category="T-shirt"></AllProducts>}></Route>
        <Route
          path="/Mugs"
          element={<AllProducts category="Mugs"></AllProducts>}></Route>
        <Route
          path="/Caps"
          element={<AllProducts category="Caps"></AllProducts>}></Route>
        <Route
          path="/product/:slug"
          element={<SingleProductPage></SingleProductPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/checkout"
          element={
            <Checkout setChildren={setChildren} setShowModal={setShowModal} />
          }></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/wishList" element={<WishList />}></Route>
        <Route path="/ordersummary" element={<OrderSummary />}></Route>

        <Route path="*" element={<Page_404 />}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
