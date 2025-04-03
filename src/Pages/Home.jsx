import React, { useEffect, useState } from 'react'
import Data from '../Data.json'
import HomeImg from '../assets/HomeImg.png'
import { Link } from 'react-router-dom'


import PerfectHome from '../assets/PerfectHome.png'
import PerfectHome2 from '../assets/PerfectHome2.png'
import PerfectHome3 from '../assets/PerfectHome3.png'

import Spalni from '../assets/Spalni.png'
import Spalni2 from '../assets/Spalni2.png'
import Spalni3 from '../assets/Spalni3.png'

import Group from '../assets/Group.svg'
import Group2 from '../assets/Group2.svg'
import Group3 from '../assets/Group3.svg'
import Group4 from '../assets/Group4.svg'

import "aos/dist/aos.css";
import Aos from 'aos'
import Winter from '../Seasons/Winter'
import Summer from '../Seasons/Summer'
import Autumn from '../Seasons/Autumn'

function Home() {
    const[products,setProducts]=useState(Data.products)
    useEffect(() => {
      Aos.init({
        duration: 2000,
      });
    }, []);
  return (
    <>
    <div className='p-5 mx-auto w-full lg:max-w-[1440px]'>
      <div className=' relative h-[350px] bg-gradient-to-r from-orange-400 to-orange-100 rounded-4xl hover:shadow-[0px_0px_30px_1px_orange] transition duration-300 lg:h-[650px]' >
        <img data-aos='fade-down' src={HomeImg} className='w-[500px] h-[400px] lg:w-[1000px] lg:h-[800px] object-cover' alt="rams" />
        <div data-aos='fade-left' className='text-end absolute top-10 right-5 lg:right-9 lg:top-22'>
          <h3 style={{color:'rgb(199, 200, 65)'}} className='text-xl font-bold lg:text-3xl'>Eco-Friendly</h3>
          <h2 style={{color:'rgb(199, 210, 65)'}} className='text-2xl font-bold pt-5 lg:text-5xl'>Clean Sleep</h2>
          <h1 style={{color:'rgb(199, 180, 65)'}} className='text-3xl font-semibold pt-5 font-serif lg:text-8xl '>Products</h1>
        </div>
      </div>
    
    <div className='flex flex-col gap-10 justify-center items-center lg:flex-row lg:gap-20  py-14 px-5'>
      <div data-aos='fade-right' className='flex items-center gap-2'>
        <img src={Group} alt="rasm" />
        <div >
          <h2 className='text-2xl font-bold'>Free Delivery</h2>
          <h3 className='text-xl text-gray-500'>Free delivery for all orders</h3>
        </div>
      </div>
      <div data-aos='fade-right' className='flex items-center gap-2'>
      <img src={Group2} alt="rasm" />
        <div>
          <h2 className='text-2xl font-bold'>Free Delivery</h2>
          <h3 className='text-xl text-gray-500'>Free delivery for all orders</h3>
        </div>
      </div>
      <div data-aos='fade-left' className='flex items-center gap-2'>
      <img src={Group3} alt="rasm" />
        <div >
          <h2 className='text-2xl font-bold'>Free Delivery</h2>
          <h3 className='text-xl text-gray-500'>Free delivery for all orders</h3>
        </div>
      </div>
      <div data-aos='fade-left' className='flex items-center gap-2'>
      <img src={Group4} alt="rasm" />
        <div >
          <h2 className='text-2xl font-bold'>Free Delivery</h2>
          <h3 className='text-xl text-gray-500'>Free delivery for all orders</h3>
        </div>
      </div>
    </div>


    <div data-aos='fade-down' className='relative py-10'>
    <div  className=' flex flex-col justify-center items-center bg-gray-700 rounded-4xl hover:shadow-[0px_0px_30px_1px_red] transition duration-300 px-16 py-5 my-10 lg:flex-row lg:justify-between'>
        <div data-aos='fade-right' className='py-17 text-center lg:text-start lg:py-26'>
          <h1 className='text-4xl font-bold lg:text-8xl text-white'>100%</h1>
          <h2 className='text-white text-2xl font-bold pt-10'>Material Quality</h2>
        </div>
 
        <div data-aos='fade-left' className='flex flex-col gap-5 w-[240px] lg:w-[400px]'>
          <h2 className='text-white text-2xl lg:text-4xl font-bold'>"Eco-Friendly Sleep Products"</h2>
          <h3 className='text-white text-xl font-semibold'>A company that has been producing cotton fabrics for global use for many years</h3>
          <Link to={'/collection'} className='px-9 py-3 text-center w-[160px] mx-auto rounded-2xl font-semibold lg:mx-1 bg-white'>Collection</Link>
        </div>
      </div>
      <div data-aos='zoom-in' className='absolute top-0 left-5 lg:-top-4 lg:left-60'>
          <img src={Spalni} className=' w-[250px] lg:w-[840px] ' alt="HomeImg" />
      </div>
    </div>
 

      <div data-aos='zoom-in' className='text-center'>
      <h1 className='text-2xl lg:text-5xl font-bold'>Winter collection</h1>
      <h2 className='text-2xl font-medium pt-7'>Eco-Friendly Sleep Products</h2>
      </div>
    <div className='pt-16'>
      <Winter/>
    </div>
    
    <div data-aos='fade-down' className='relative py-10'>
    <div className=' flex flex-col justify-center items-center bg-purple-700 hover:shadow-[0px_0px_30px_1px_red] transition duration-300  rounded-4xl px-16 py-5 my-10 lg:flex-row lg:justify-between'>
        <div data-aos='fade-right' className='py-17 text-center lg:text-start lg:py-26'>
          <h1 className='text-4xl font-bold lg:text-8xl text-white'>100%</h1>
          <h2 className='text-white text-2xl font-bold pt-10'>Material Quality</h2>
        </div>
 
        <div data-aos='fade-left' className='flex flex-col gap-5 w-[240px] lg:w-[400px]'>
          <h2 className='text-white text-2xl lg:text4xl font-bold'>"Eco-Friendly Sleep Products"</h2>
          <h3 className='text-white text-xl font-semibold'>A company that has been producing cotton fabrics for global use for many years</h3>
          <Link to={'/collection'} className='px-9 py-3  text-center   w-[160px] mx-auto z-10 rounded-2xl font-semibold lg:mx-1 bg-white'>Collection</Link>
        </div>
      </div>
      <div data-aos='zoom-in' className='absolute top-0 left-5 lg:-top-4 lg:left-60'>
          <img src={Spalni2} className=' w-[250px] lg:w-[840px] ' alt="HomeImg" />
      </div>
    </div>

      <div data-aos='zoom-in' className='text-center'>
      <h1 className='text-2xl lg:text-5xl font-bold'>Autumn collection</h1>
      <h2 className='text-2xl font-medium pt-7'>Eco-Friendly Sleep Products</h2>
      </div>
      <div className='pt-16'>
        <Autumn/>
      </div>

    <div data-aos='fade-down' className='relative py-10  '>
      <div className=' flex flex-col hover:shadow-[0px_0px_30px_1px_red] transition duration-300 justify-center items-center bg-green-700 rounded-4xl px-16 py-5 my-10 lg:flex-row lg:justify-between'>
        <div data-aos='fade-right' className='py-17 text-center lg:text-start lg:py-26'>
          <h1 className='text-4xl font-bold lg:text-8xl text-white'>100%</h1>
          <h2 className='text-white text-2xl font-bold pt-10'>Material Quality</h2>
        </div>
 
        <div data-aos='fade-left' className='flex flex-col gap-5 w-[240px] lg:w-[400px]'>
          <h2 className='text-white text-2xl lg:text-4xl font-bold'>"Eco-Friendly Sleep Products"</h2>
          <h3 className='text-white text-xl font-semibold'>A company that has been producing cotton fabrics for global use for many years</h3>
          <Link to={'/collection'} className='px-9 py-3 text-center w-[160px] mx-auto rounded-2xl font-semibold lg:mx-1 bg-white'>Collection</Link>
        </div>
      </div>
      <div data-aos='zoom-in' className='absolute top-0 left-5 lg:-top-4 lg:left-60'>
          <img src={Spalni3} className=' w-[250px] lg:w-[840px] ' alt="HomeImg" />
      </div>
    </div>
    
    <div data-aos='zoom-in' className='text-center'>
      <h1 className='text-2xl lg:text-5xl font-bold'>Summer collection</h1>
      <h2 className='text-2xl font-medium pt-7'>Eco-Friendly Sleep Products</h2>
      </div>
      <div className='pt-16'>
        <Summer/>
      </div>

      <div data-aos='zoom-in' className='text-center pt-6'>
        <h1 className='text-2xl lg:text-4xl font-bold'>News</h1>
        <h2 className='text-2xl text-gray-500 font-medium pt-5'>Eco-Friendly Sleep Products</h2>
      </div>
      {/* <Winter/> */}
      <div className='flex items-center flex-col gap-14 pt-16 lg:flex-row'>
        <div data-aos='fade-right' className='w-[300px] lg:w-[430px]'>
          <img className='rounded-2xl' src={PerfectHome} alt="Imglar" />
          <div className='px-5 py-3 flex flex-col gap-2'>
            <h2 className='text-gray-500 text-xl'>10/05/2024 by admin</h2>
            <h1 className='text-2xl font-bold leading-8 '>How to Choose the Perfect Gadgets</h1>
            <h3 className='text-xl text-gray-500 leading-7'>A beautiful valley filled with steam and the meridian sun at its peak...</h3>
          </div>
        </div>
        <div data-aos='zoom-in' className='w-[300px] lg:w-[430px]'>
          <img className='rounded-2xl' src={PerfectHome2} alt="Imglar" />
          <div className='px-7 py-3 flex flex-col gap-2'>
            <h2 className='text-gray-500 text-xl'>10/05/2024 by admin</h2>
            <h1 className='text-2xl font-bold leading-8 '>How to Use Modern Technologies</h1>
            <h3 className='text-xl text-gray-500 leading-7'>Fascinating stories about how technology is changing our lives...</h3>
          </div>
        </div>
        <div data-aos='fade-left' className='w-[300px] lg:w-[430px]'>
          <img className='rounded-2xl' src={PerfectHome3} alt="Imglar" />
          <div className='px-5 py-3 flex flex-col gap-2'>
            <h2 className='text-gray-500 text-xl'>10/05/2024 by admin</h2>
            <h1 className='text-2xl font-bold leading-8 '>Ways to Implement Creative Ideas</h1>
            <h3 className='text-xl text-gray-500 leading-7'>What challenges arise in the process of creating new discoveries...</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home