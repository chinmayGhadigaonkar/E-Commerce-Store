import { useEffect, useState } from "react"
import { HiOutlineMenu } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiLogIn, BiLogOut } from "react-icons/bi"
import { VITE_BACKEND_URL } from '../config';
import { Toaster, toast } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import Cart from "./Cart"
import { useDispatch } from "react-redux"
import { removeUser } from "../store/Slice/userSlice"



const Navbar = () => {

    const [show, setShow] = useState(false)
    const [cart, setCart] = useState(false)
    const navigate = useNavigate()
    const HambegClick = () => {
        setShow((prev) => !prev)
    }

    const dispatch = useDispatch()
    const onLogout = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${VITE_BACKEND_URL}/auth/logout`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json"
                },
                credentials: "include",

            })
            const { success } = await res.json()
            if (success) {
                dispatch(removeUser("userInfo"))
                toast.success("Logout Successfully ")
                navigate("/")
            }

        }
        catch {
            toast.error("Something went's wrong. Please try again")

        }
    }


    return (
        <>
            <div className="h-28   shadow-md  flex flex-col overflow-hidden-x md:flex-row w-[100%] justify-between items-center  ">
                <div className="logo md:order-1 flex  justify-between md:w-[60vw] w-[100vw] order-1   items-center ">
                    <Link to='/'>
                        <h1 className=" ml-2 text-center font-bold text-2xl py-6 text-purple-500 cursor-pointer " >E-Commerce Store</h1>
                    </Link>


                    <div className="menu md:hidden  w-[50px] h-[50px]   ">
                        <HiOutlineMenu onClick={HambegClick} className=" cursor-pointer h-10 w-12 m-auto pr-1 text-purple-500"></HiOutlineMenu>
                    </div>
                </div>

                <div className={` z-50 opacity-[1] shadow-md md:shadow-none py-5 order-3 flex md:order-2  md:justify-end mx-4 font-bold text-center w-[100%] md:w-[60%] md:h-20 h-52 bg-white list-none space-x-4  transition-transform duration-200 md:translate-x-0 ${show ? 'translate-x-0 md:flex-row flex-col ' : 'translate-x-[1000px]  '}   `}>
                    <li className="my-2 font-semibold text-gray-900 md:text-xl text-center  hover:text-purple-500 " > <Link to='/Tshirt'>T-Shirts</Link></li>
                    <li className="my-2 font-semibold text-gray-900  md:text-xl text-center  hover:text-purple-500 "   > <Link to='/Mugs'>Mugs</Link></li>
                    <li className="my-2 font-semibold text-gray-900  md:text-xl text-center hover:text-purple-500  "> <Link to='/Caps'>Caps</Link></li>
                    <li>
                        {
                            !localStorage.getItem("userInfo") ? (
                                <div>
                                    <Link to='/login'>
                                        <BiLogIn className="w-8 h-12  text-purple-500  cursor-pointer " />
                                    </Link>
                                </div>) : (
                                <div>
                                    <Link to='/'>
                                        <BiLogOut className="w-8 h-12   text-purple-500  cursor-pointer  " onClick={onLogout} />
                                    </Link></div>)
                        }


                    </li>

                </div>


                <div className=" md:static  absolute right-10  duration-200   top-5 md:order-3 w-12 justify-between items-end flex order-2  ">
                    <AiOutlineShoppingCart onClick={() => { setCart(true) }} className="w-8 h-9   text-purple-500  cursor-pointer  mr-4"></AiOutlineShoppingCart>
                </div>
            </div>
            <div className={`  h-full w-[100vw] md:w-[30vw] bg-white  z-50 opacity-[1] overflow-hidden-x absolute top-0 right-0  ${cart ? "translate-x-0 visible transition-transform duration-200 hover:text-purple-500" : "translate-x-[1000px] hidden "}`}>
                <Cart setCart={setCart} ></Cart>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
}

export default Navbar