import React, { createContext } from 'react'


export const ThemeContext = createContext();

function GobalContext({children}) {
  return (
    <ThemeContext.Provider value={"dark"}>
        {children}
    </ThemeContext.Provider>
  )
}

export default GobalContext