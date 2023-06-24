import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tshirt from './components/Tshirt'
import Home from './Pages/Home';
import Mugs from './components/Mugs';
import Navbar from './components/Navbar'
import Caps from './components/Caps';
import Footer from './components/Footer';
import SingleProductPage from './components/SingleProductPage';
import Login from './Pages/Login'
import Signup from './Pages/Signup';

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Tshirt' element={<Tshirt></Tshirt>} ></Route>
          <Route path='/Mugs' element={<Mugs></Mugs>} ></Route>
          <Route path='/Caps' element={<Caps></Caps>}></Route>
          <Route path='/product' element={<SingleProductPage></SingleProductPage>}></Route>
          <Route path='/product' element={<SingleProductPage></SingleProductPage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>



        </Routes>
    
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
