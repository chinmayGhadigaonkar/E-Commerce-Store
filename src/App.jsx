import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tshirt from './components/category/Tshirt'
import Home from './Pages/Home';
import Mugs from './components/category/Mugs';
import Navbar from './components/common/Navbar'
import Filter from './components/Filter/Filter'
import Caps from './components/category/Caps';
import Footer from './components/common/Footer';
import SingleProductPage from './components/product/SingleProductPage';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { productFetch  } from './store/Slice/productSlice';
import Checkout from './components/checkout/Checkout';
import { cartFetch } from './store/Slice/cartSlice';
import AllProducts from "./Pages/AllProducts";
import SearchPage from "./components/common/SearchPage";




function App() {

  const dispatch = useDispatch()

  // const {userInfo} = useSelect(state => state.userInfo)
  const cart = useSelector(state=>state.cart)

  useEffect(()=>{
    dispatch(productFetch())
    dispatch(cartFetch())
  },[])

  
  return (
    <>

    <BrowserRouter>
        <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home  ></Home>}  ></Route>
          <Route path='/Tshirt' element={<Tshirt></Tshirt>} ></Route>
          <Route path='/Mugs' element={<Mugs></Mugs>} ></Route>
          <Route path='/Caps' element={<Caps></Caps>}></Route>
          <Route path='/product/:slug' element={<SingleProductPage></SingleProductPage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/products' element={<AllProducts/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>

        
        </Routes>
    
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
