import React from 'react'
import App from './App'
import GobalContext from '../Context/GobalContext'

function Main() {
  return (
    <GobalContext>
        <App/>
    </GobalContext>
  )
}

export default Main