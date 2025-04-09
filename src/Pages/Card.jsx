import React, { useContext } from 'react'
import { CartContext } from '../Feature/ContextProvider'
import CardProduct from '../Component/CardProduct'




function Card() {
    const {cart} = useContext(CartContext)

    
  return (
    <div  className='h-[26vh]'>
    <div className='w-full max-w-[1440px]  pt-3 mx-auto relative'>
        <div className='flex justify-center mt-30 '>
          <h1 className='text-6xl text-gray-200  font-serif'>No Data</h1>
        </div>

    </div>
    </div>
  )
}

export default Card