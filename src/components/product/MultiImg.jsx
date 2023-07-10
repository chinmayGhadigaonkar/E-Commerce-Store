import React from 'react'

const MultiImg = ({IMG}) => {
  return (
    <>

    <div className="w-40 h-52 my-3 border-2 rounded-xl border-black  cursor-pointer mx-auto">
      <img className='w-40  bg-cover h-[100%] object-cover object-center   rounded-xl  '  src={IMG} alt="" />

    </div>

    
    </>
  )
}

export default MultiImg