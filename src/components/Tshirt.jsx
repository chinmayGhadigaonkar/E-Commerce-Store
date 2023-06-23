import React from 'react'
import { Link } from 'react-router-dom'

const Tshirt = () => {
  return (
    <>
      <section className="text-gray-900 body-font">
      <div className="container text-center mt-16 ">
          <h1 className='text-2xl font-semibold  text-gray-900  my-2' >Explore Our Tshirts Collection</h1>
          <p className='text-sm font-medium  text-gray-900 my-2'> Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
        </div>
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-wrap  justify-center items-center ml-3">


            <div className="lg:w-1/5 md:w-1/3 p-4 w-full border-2 mx-2 my-2">
              <Link to='/product'>
                <div className="block relative h-[100%] rounded overflow-hidden bg-purple-900 cursor-pointer">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">T-shirt</h3>
                  <h2 className="text-gray-900 title-font text-medium   font-medium">Mens Cotton Henley Neck/Chinese Collar Tshirt</h2>
                  <p className="mt-1">₹ 499</p>
                </div>
              </Link>
            </div>

            <div className="lg:w-1/5 md:w-1/3 p-4 w-full border-2 mx-2 my-2">
              <Link to=''>
                <div className="block relative h-[100%] rounded overflow-hidden bg-purple-900 cursor-pointer">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">T-shirt</h3>
                  <h2 className="text-gray-900 title-font text-medium   font-medium">Mens Cotton Henley Neck/Chinese Collar Tshirt</h2>
                  <p className="mt-1">₹ 499</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full border-2 mx-2 my-2">
              <Link to=''>
                <div className="block relative h-[100%] rounded overflow-hidden bg-purple-900 cursor-pointer">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">T-shirt</h3>
                  <h2 className="text-gray-900 title-font text-medium   font-medium">Mens Cotton Henley Neck/Chinese Collar Tshirt</h2>
                  <p className="mt-1">₹ 499</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full border-2 mx-2 my-2">
              <Link to=''>
                <div className="block relative h-[100%] rounded overflow-hidden bg-purple-900 cursor-pointer">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">T-shirt</h3>
                  <h2 className="text-gray-900 title-font text-medium   font-medium">Mens Cotton Henley Neck/Chinese Collar Tshirt</h2>
                  <p className="mt-1">₹ 499</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full border-2 mx-2 my-2">
              <Link to=''>
                <div className="block relative h-[100%] rounded overflow-hidden bg-purple-900 cursor-pointer">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">T-shirt</h3>
                  <h2 className="text-gray-900 title-font text-medium   font-medium">Mens Cotton Henley Neck/Chinese Collar Tshirt</h2>
                  <p className="mt-1">₹ 499</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full border-2 mx-2 my-2">
              <Link to=''>
                <div className="block relative h-[100%] rounded overflow-hidden bg-purple-900 cursor-pointer">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61+OnW2GPGL._UY606_.jpg" />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">T-shirt</h3>
                  <h2 className="text-gray-900 title-font text-medium   font-medium">Mens Cotton Henley Neck/Chinese Collar Tshirt</h2>
                  <p className="mt-1">₹ 499</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Tshirt