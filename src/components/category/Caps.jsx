import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { filterProducts } from '../../utils/filterProducts'

const Caps = () => {

  const { products } = useSelector(state => state.products)

  const filterProduct  = filterProducts(products , "Caps")
  return (
    <>
    <section className="text-gray-900 body-font">
        <div className="container text-center mt-16 ">
          <h1 className='text-2xl font-semibold  text-gray-900  my-2' >Explore Our Caps Collection</h1>
          <p className=' text-sm font-medium  text-gray-900 my-2'>Our Caps are perfect for every interest, including coding Caps for tech enthusiasts, anime Caps, and casual Caps for everyday use. All of our Caps are made with high-quality materials and are designed to be durable and long-lasting. Shop now and find the perfect mug for you!</p>
        </div>
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-wrap  justify-center items-center ml-3">


            {
              filterProduct.map((product) => {
                return (
                  <>
                    <div key={product._id} className="lg:w-3/12 md:w-1/3 h-[35rem] p-4 w-full border-2 mx-2 my-2">
                      <Link to= {`/product/${product.slug}`}>
                        <div className=" rounded overflow-hidden bg-purple-900 flex justify-center items-center cursor-pointer">
                          <img alt="ecommerce" className="object-fit object-center w-full h-[20rem] block" src={product.img[0]} />
                        </div>
                        <div className="mt-4 w-3/4">
                          <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">{product.category}</h3>
                          <h2 className="text-gray-900 title-font text-sm   font-medium">{product.title}</h2>
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

export default Caps


// https://m.media-amazon.com/images/I/5176PrnrJFL._SX522_.jpg