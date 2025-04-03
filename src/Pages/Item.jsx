import { useState } from "react"
import { product } from "../mock/data"
import { Outlet, useParams } from "react-router-dom"
import Raiting from "../CollectionAll/Raiting"



function Item() {
    let {link}=useParams()
    
  
  return (
    <>
    <div className="w-full lg:max-w-[1440px] mx-auto py-10 px-5">
        <div className="grid grid-cols-5 gap-5 text-center">
        {
            product.winter.map(v=>
                <div className="rounded-2xl" key={v}>
                    <img src={v.images} alt="" />
                    <h2>{v.title}</h2>
                </div>
            )
        }
        </div>
        <Outlet/>
        <div className="flex flex-row gap-10 mt-10  ">
            <div className="w-[700px]">
                <h2 className="text-3xl  py-7 font-bold ">Submitted Comments</h2>

            </div>
            <div className="px-5 w-[700px]" >
                <h2 className="text-3xl py-7 font-bold text-center">Leave a Comment</h2>
                <form action="">
                    <div>
                        <label className="text-gray-500 text-xl font-semibold" htmlFor="raiting">Rating:</label>
                        <Raiting/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <label className="text-gray-500 text-xl font-semibold" htmlFor="name">Name</label>
                        <input  className="bg-gray-200 py-3 rounded-3xl" type="text"  />
                    </div>
                    <div className="flex flex-col gap-6">
                        <label  className="text-gray-500 text-xl font-semibold"  htmlFor="email">Email</label>
                        <input  className="bg-gray-200 py-3 rounded-3xl" type="email"  />
                    </div>
                    <div className="flex flex-col gap-6">
                        <label className="text-gray-500 text-xl font-semibold" htmlFor="commit">COmmit</label>
                        <textarea className="bg-gray-200 h-30 rounded-3xl " name="" id=""></textarea>
                    </div>
                    <button className="bg-red-500 mt-5 py-3.5 text-center w-[650px] text-white font-semibold rounded-3xl">Submit</button>
                </form>
            </div>
        </div>
        <div>
            <h1 className="text-5xl font-bold text-center mt-30">Smiler Product</h1>
        </div>
    </div>
    </>
  )
}

export default Item