import React, { useContext } from 'react'
import { CartContext } from '../Feature/ContextProvider'
import CardProduct from '../Component/CardProduct'




function Card() {
    const {cart} = useContext(CartContext)
    
  return (
    <div >
    <div className='w-full max-w-[1440px] pt-3 mx-auto relative'>
        <div>
            {cart.map(p=>(
                <CardProduct product={p}></CardProduct>

            ))}
        </div>

    </div>
    </div>
  )
}

export default Card