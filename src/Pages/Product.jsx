import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { product } from '../mock/data'


function Product() {
    let {id}=useParams()
    if(!product[id]){
        return <div className='flex justify-center py-28'><h1>No data</h1> </div>
    }


  return (
    <div>
        <h1>{id}</h1>
        <div className='grid grid-cols-4 gap-10 mx-auto'>
            {product[id]?.map(v=><Link to={v.link} key={v.id}>{v.id} - {v.title} {v.images}</Link>)}
        </div>
    </div>
  )
}

export default Product