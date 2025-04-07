import React, { createContext, useEffect, useReducer, useState } from 'react'
import CartReduser from './CardReduser'
import i18next from 'i18next';

export const CartContext = createContext()


function ContextProvider({children}) {
    const [cart, dispatch] = useReducer(CartReduser,[])
    const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
    

    useEffect(() => {
      i18next.changeLanguage(lang);
      localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <CartContext.Provider value={{cart,dispatch, lang, setLang}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider