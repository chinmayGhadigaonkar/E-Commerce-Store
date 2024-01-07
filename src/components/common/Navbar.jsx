import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn, BiLogOut, BiSearch } from "react-icons/bi";
import { VITE_BACKEND_URL } from "../../config";
import { Toaster, toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/Slice/userSlice";
import Cart from "../cart/Cart";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { ColorButton } from "../../utils/BootstrapButton";
import "../../index.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const hamburgerClick = () => {
    setShow((prev) => !prev);
  };

  const dispatch = useDispatch();

  const { cartProduct } = useSelector((state) => state.cart);
  const onLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${VITE_BACKEND_URL}/auth/logout`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      const { success } = await res.json();
      if (success) {
        dispatch(removeUser("userInfo"));
        toast.success("Logout Successfully ");
        navigate("/");
      }
    } catch {
      toast.error("Something went's wrong. Please try again");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const productSearch = async (e) => {
    if (query == undefined) {
      return toast.error("Your Query is Empty ");
    }
    try {
      const res = await fetch(
        `${VITE_BACKEND_URL}/filter/search/?query=${query}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        },
      );

      const { success, products } = await res.json();
      console.log(products);
      if (success) {
        navigate(`/search`, {
          state: {
            products,
          },
        });
      } else {
        toast.error("Product is not our list ");
      }
      setQuery("");
    } catch {
      toast.error("Something went's wrong. Please try again");
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleonSearch = () => {
    productSearch();
  };
  return (
    <>
      <div className="sm:h-28 h-32  px-2 shadow-md  flex flex-col overflow-hidden-x md:flex-row w-[100%] justify-between items-center  z-30  ">
        <div className="logo md:order-1 flex  justify-between md:w-[60vw] w-[100vw] order-1   items-center ">
          <Link to="/">
            <h1 className=" ml-2 text-center font-bold text-2xl py-6 text-purple-500 cursor-pointer ">
              E-Commerce Store
            </h1>
          </Link>
          <div className="menu md:hidden  w-[50px] h-[50px]   ">
            <HiOutlineMenu
              onClick={hamburgerClick}
              className=" cursor-pointer h-10 w-12 m-auto pr-1 text-purple-500"></HiOutlineMenu>
          </div>
        </div>

        <div
          className={` z-50  opacity-[1] shadow-md md:shadow-none py-5 order-3 flex md:order-2  md:justify-end mx-4 font-bold text-center w-[100%] md:w-[100%] md:h-20 h-72 bg-white list-none space-x-4  transition-transform duration-200 md:translate-x-0 ${
            show
              ? "translate-x-0 md:flex-row flex-col "
              : "translate-x-[1000px]  "
          }   `}>
          <li className="  w-64 space-x-2 mx-auto  flex font-semibold text-gray-900 md:text-md text-center  ">
            <input
              type="text"
              name="search"
              id="search"
              value={query}
              onChange={handleChange}
              className="w-60 h-10 pl-1  border-2 border-purple-500  outline-none rounded-lg "
              placeholder="Search a product ..."
            />
            <span>
              <button
                className="h-10 w-8 border-2 rounded-md bg-purple-500"
                onClick={handleonSearch}>
                <BiSearch className=" cursor-pointer h-5 w-5 m-auto text-white" />
              </button>
            </span>
          </li>

          <li className="my-2 font-semibold text-gray-900 md:text-xl text-center  hover:text-purple-500 ">
            <Link to="/Tshirt">Tshirts</Link>
          </li>
          <li className="my-2 font-semibold text-gray-900  md:text-xl text-center  hover:text-purple-500 ">
            <Link to="/Sweatshirts">Sweatshirts</Link>
          </li>
          <li className="my-2 font-semibold text-gray-900  md:text-xl text-center hover:text-purple-500  ">
            <Link to="/Caps">Caps</Link>
          </li>
          <li className="my-2 font-semibold text-gray-900  md:text-xl text-center hover:text-purple-500  ">
            {!localStorage.getItem("userInfo") ? (
              <div>
                <Link to="/login">
                  <ColorButton
                    id="fade-button"
                    size="small"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}>
                    Login
                  </ColorButton>
                </Link>
              </div>
            ) : (
              <div>
                <ColorButton
                  id="fade-button"
                  size="small"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}>
                  Profile
                </ColorButton>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}>
                  <MenuItem
                    onClick={() => {
                      navigate("/wishlist"),
                        window.location.assign(`/wishlist`);
                    }}>
                    WishList
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/allorder")}>
                    Your Order
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/">
                      {/* <BiLogOut  className="text-purple-500 border-2 h-5 text-xl  cursor-pointer  "/> */}
                      <span onClick={onLogout}>Logout</span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </li>
        </div>

        <div className=" md:static  sm:relative   inline-flex mr-0   duration-200   -top-5  md:order-3 w-12  sm:justify-between items-end  order-2  ml-auto ">
          <AiOutlineShoppingCart
            onClick={() => {
              setCart(true);
            }}
            className="w-8 h-12  text-purple-500  cursor-pointer"></AiOutlineShoppingCart>
          <div className=" relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full -top-5 right-1 dark:border-purple-500 ">
            {cartProduct.length}
          </div>
        </div>
      </div>
      <div
        className={` h-full w-[100vw] lg:w-[25vw] md:w-[30vw] bg-white  z-50 opacity-[1] overflow-hidden-x fixed  top-0 right-0  ${
          cart
            ? "translate-x-0 visible transition-transform duration-200"
            : "translate-x-[1000px] hidden "
        }`}>
        <Cart setCart={setCart}></Cart>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Navbar;
