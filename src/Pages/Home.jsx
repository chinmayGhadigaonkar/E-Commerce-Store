import React from 'react'
import { Carousel} from "@material-tailwind/react";
import Product from '../components/Product';

import img1 from '../IMG/image1.avif'
import img2 from '../IMG/img2.jpg'
import img3 from '../IMG/image3.avif'



const Home = () => {
  return (
    < >

    <div className='m-auto my-3 w-[60%] h-[60%]'>
    <Carousel className="rounded-xl">
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
    <div className='m-auto  w-[100%]'> 
    <Product></Product>

    </div>
 
     

    </>
  )
}

export default Home