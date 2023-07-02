import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { filterProducts } from '../../utils/filterProducts'
import SingleProductPage from '../product/SingleProductPage'


const Tshirt = () => {
  const { products } = useSelector(state => state.products)
const navigate = useNavigate()
  const filterProduct  = filterProducts(products , "T-shirt")

  
 
  return (
    <>
      <section className="text-gray-900 body-font">
        <div className="container text-center mt-16 ">
          <h1 className='text-2xl font-semibold  text-gray-900  my-2' >Explore Our T-shirts Collection</h1>
          <p className='text-sm font-medium  text-gray-900 my-2'> Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
        </div>
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-wrap  justify-center items-center ml-3">


            {
              filterProduct.map((product) => {
                return (
                  <>
                    <div key={product._id} className="lg:w-3/12 md:w-1/3  p-4 w-full border-2 mx-2 my-2">
                    <Link to= {`/product/${product.slug}`} onClick={()=>{handleClick(product.slug)}}>
                        <div className="block relative rounded overflow-hidden bg-purple-900 cursor-pointer">
                          <img alt="ecommerce" className="object-fit object-center w-full h-[20rem] block" src={product.img[0]} />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">{product.category}</h3>
                          <h2 className="text-gray-900 title-font text-sm font-medium">{product.title}</h2>
                          <p className="mt-1">₹ {product.price}</p>
                        </div>
                      </Link>
                    </div>

                  </>
                )
              })
            }

          </div>
        </div>
      </section>

    </>
  )
}

export default Tshirt