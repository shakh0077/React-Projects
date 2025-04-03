import React from 'react'
import { product } from '../mock/data'
import { Link } from 'react-router-dom';

function Products() {
    console.log(product);
    
  return (
    <div>
        <h1>
        Products
        </h1>

        <div className='grid grid-cols-3 gap-20'>
            {Object.keys(product).map(v=><Link key={v} to={`/product/${v}`}>{v}</Link>)}
        </div>
    </div>
  )
}

export default Products