import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Context/GobalContext'

function Home() {
    const [darkMood, setDarkmood] = useState(false)
    const theme  = useContext(ThemeContext)
    console.log(theme);
    
  return (
    <div className={`${theme =='dark'?'bg-blue-800' : 'bg-amber-400' }`}>
        <button onClick={()=> setDarkmood(darkMood)}>Button</button>
    </div>
  )
}
export default Home