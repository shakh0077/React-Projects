import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { product } from '../mock/data'


function Product() {
    let {id}=useParams()
    if(!product[id]){
        return <div className='flex justify-center py-28'><h1 className='text-7xl text-gray-300 font-serif'>No data</h1> </div>
    }

    

    // Barcha kolleksiyalardan mahsulotni qidirish
    const allProducts = [...product.winter, ...product.summer, ...product.autumn];
    const selectedProduct = allProducts.find((item) => item.id.toString() === id);
  
    if (!selectedProduct) {
      return <h2 className="text-center text-3xl mt-10">Product Not Found</h2>;
    }

  return (
    <div>
  <div className="max-w-4xl mx-auto p-6">
      <img
        src={selectedProduct.images}
        alt={selectedProduct.title}
        className="w-full h-auto rounded-lg shadow-md"
      />
      <h2 className="text-3xl font-bold mt-4">{selectedProduct.title}</h2>
      <p className="text-lg text-gray-600 mt-2">{selectedProduct.description}</p>
    </div>
    </div>
  )
}

export default Product