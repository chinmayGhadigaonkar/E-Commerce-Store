import React from 'react'

const Signup = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container md:px-5 py-8 md:py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-2xl font-semibold  text-gray-900  my-2">Sign Up Here</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3  mx-auto">
                        <div className="flex flex-col justify-center items-center flex-wrap -m-2">
                        <div className="p-2 md:w-3/5 w-4/5">
                                <div className="">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 md:w-3/5 w-4/5">
                                <div className="">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2  md:w-3/5 w-4/5">

                                <div className="">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password  </label>
                                    <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2  md:w-3/5 w-4/5">

                                <div className="">
                                    <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                    <input type="cpassword" id="cpassword" name="cpassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            {/* <p className='text-sm py-1 text-purple-500 cursor-pointer'>Create new Account</p> */}
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup