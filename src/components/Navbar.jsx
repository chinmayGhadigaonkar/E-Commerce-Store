import { useState } from "react"
import { HiOutlineMenu } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai"

import { Link } from "react-router-dom"
import Cart  from "./Cart"

const Navbar = () => {
    const [show, setShow] = useState(false)
     const [cart ,setCart] =useState(false)  
    const HambegClick = () => {
        setShow((prev) => !prev)
    }

    return (
        <>
            <div className="h-28   shadow-md  flex flex-col overflow-hidden-x md:flex-row w-[100%] justify-between items-center  ">
                <div className="logo md:order-1 flex  justify-between md:w-[60vw] w-[100vw] order-1   items-center ">
                    <h1 className=" ml-2 text-center font-bold text-2xl py-6 text-purple-500" >E-Commerce Store</h1>
                    
                        
                    <div className="menu md:hidden  w-[50px] h-[50px]   ">
                        <HiOutlineMenu  onClick={HambegClick} className=" cursor-pointer h-10 w-12 m-auto pr-1 text-purple-500"></HiOutlineMenu>
                    </div>
                </div>
               
                <div className={` z-50 opacity-[1] shadow-md md:shadow-none py-5 order-3 flex md:order-2  md:justify-end mx-4 font-bold text-center w-[100%] md:w-[60%] md:h-20 h-52 bg-white list-none space-x-4  transition-transform duration-200 md:translate-x-0 ${show ? 'translate-x-0 md:flex-row flex-col ' : 'translate-x-[1000px]  '}   `}>              
                        <li className="my-2 font-semibold text-gray-900 md:text-xl text-center  hover:text-purple-500 " onClick={() => setShow(show(false))}  > <Link  to='/Tshirt'>T-Shirts</Link></li>
                        <li className="my-2 font-semibold text-gray-900  md:text-xl text-center  hover:text-purple-500 " onClick={() => setShow(show(false))}  > <Link  to='/Mugs'>Mugs</Link></li>
                        <li className="my-2 font-semibold text-gray-900  md:text-xl text-center hover:text-purple-500  " onClick={() => setShow(show(false))} > <Link  to='/Caps'>Caps</Link></li>
                       <li>
                        <Link to='/login'>
                        <button className="w-20  h-10 font-semibold rounded-md bg-purple-500  border-2 border-white text-white cursor-pointer text-center hover:bg-white hover:text-gray-500 hover:border-purple-500  ">Login</button>
                        </Link>
                    
                        </li> 
                      
                      </div>

               
                <div className=" md:static  absolute right-10  duration-200   top-5 md:order-3 w-12 justify-between items-end flex order-2  ">

                    <AiOutlineShoppingCart onClick={()=>{setCart(true)}} className="w-8 h-12 mx-2 text-gray-900 pb-1 cursor-pointer  mr-4"></AiOutlineShoppingCart>
                    {/* <div className="cart-length bg-purple-500  text-white w-3 mx-auto rounded-2xl   absolute top-10  right-4 "> 0 </div> */}
             

                
                </div>
            </div>
            <div className={`  h-full w-[100vw] md:w-[30vw] bg-white  z-50 opacity-[1] overflow-hidden-x absolute top-0 right-0  ${cart? "translate-x-0 visible transition-transform duration-200 hover:text-purple-500" :"translate-x-[1000px] hidden " }`}>
            <Cart  setCart={setCart} ></Cart>
            </div>
        </>
    )
}

export default Navbar