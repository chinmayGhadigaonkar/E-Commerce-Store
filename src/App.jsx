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
import { useEffect } from 'react';
import { productFetch  } from './store/Slice/productSlice';
import Checkout from './components/checkout/Checkout';
import { cartFetch } from './store/Slice/cartSlice';




function App() {

  const dispatch = useDispatch()
  // const {userInfo} = useSelect(state => state.userInfo)
  const cart = useSelector(state=>state.cart)

  useEffect(()=>{
    dispatch(cartFetch())
    dispatch(productFetch())
   
  },[])

  return (
    <>

    <BrowserRouter>
        <Navbar/>
        <Filter></Filter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Tshirt' element={<Tshirt></Tshirt>} ></Route>
          <Route path='/Mugs' element={<Mugs></Mugs>} ></Route>
          <Route path='/Caps' element={<Caps></Caps>}></Route>
          <Route path='/product/:slug' element={<SingleProductPage></SingleProductPage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
    
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
