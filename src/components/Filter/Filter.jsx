import React ,{useState} from 'react'
import { BsFilterRight } from "react-icons/bs";


const Filter = ({setFilter}) => {
    
  return (
    <div className="">
      <div className='w-full'>
            <BsFilterRight className='h-12 w-12  mt-2 ml-auto  text-purple-500 cursor-pointer'  onClick={()=>{setFilter(pre=>!pre)}} />
    </div>
     
    </div>
    
  )
}

export default Filter