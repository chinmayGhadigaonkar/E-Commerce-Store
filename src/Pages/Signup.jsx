import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_BACKEND_URL } from "../config";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../store/Slice/userSlice";

const Signup = () => {
  const [signUp, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigator = useNavigate();
  const dispach = useDispatch();

  const signupUser = async (e) => {
    e.preventDefault();

    if (signUp.password[0] !== signUp.cpassword[0]) {
      toast.error("password is  not matching");
      return;
    }
    try {
      const res = await fetch(`${VITE_BACKEND_URL}/auth/createuser`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: signUp.name[0],
          email: signUp.email[0],
          password: signUp.password[0],
        }),
      });
      const { success, user, msg } = await res.json();

      if (success) {
        // dispach(setUser(user))
        setSignup({ name: "", email: "", password: "" });
        toast.success("Signup successfully");
        navigator("/login");
      } else {
        toast.error(msg);
      }
    } catch (e) {
      console.log("Something went's wrong. Please try again");
    }
  };

  const handleChange = (event) => {
    setSignup({ ...signUp, [event.target.name]: [event.target.value] });
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container md:px-5 py-8 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl font-semibold  text-gray-900  my-2">
              Sign Up Here
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3  mx-auto">
            <div className="flex flex-col justify-center items-center flex-wrap -m-2">
              <div className="p-2 md:w-3/5 w-4/5">
                <div className="">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={signUp.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 md:w-3/5 w-4/5">
                <div className="">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signUp.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2  md:w-3/5 w-4/5">
                <div className="">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={signUp.password}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2  md:w-3/5 w-4/5">
                <div className="">
                  <label
                    htmlFor="cpassword"
                    className="leading-7 text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    value={signUp.cpassword}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  onClick={signupUser}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
