import React, { createContext, useReducer } from 'react'
import CartReduser from './CardReduser'

export const CartContext = createContext()


function ContextProvider({children}) {
    const [cart, dispatch] = useReducer(CartReduser,[])
    

  return (
    <CartContext.Provider value={{cart,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider