import React, { useContext, useEffect, useState } from 'react'
import Data from '../Data.json'
import HomeImg from '../assets/HomeImg.png'



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
import { HashLink } from 'react-router-hash-link'
import { CartContext } from '../Feature/ContextProvider'
import { useTranslation } from 'react-i18next'

function Home() {
  const { lang, setLang } = useContext(CartContext) || {
    cart: [],
    lang: "en",
    setLang: () => {},
  };

  const { t } = useTranslation();
  
    const[products,setProducts]=useState(Data.products)
    useEffect(() => {
      Aos.init({
        duration: 2000,
      });
    }, []);
  return (
    <>
    <div className='p-5 mx-auto w-full lg:max-w-[1440px]'>
      <div className='bg-fade relative  h-[350px] bg-gradient-to-r from-orange-400 to-orange-100 rounded-4xl hover:shadow-[0px_0px_30px_1px_orange] transition duration-300 lg:h-[650px]' >
        <img data-aos='fade-down' src={HomeImg} className='w-[500px] h-[400px] lg:w-[1000px] lg:h-[800px] object-cover' alt="rams" />
        <div data-aos='fade-left' className='text-end absolute top-10 right-5 lg:right-9 lg:top-22'>
          <h3 style={{color:'rgb(199, 200, 65)'}} className='text-xl font-bold lg:text-3xl'>{t("hero.eco")}</h3>
          <h2 style={{color:'rgb(199, 210, 65)'}} className='text-2xl font-bold pt-5 lg:text-5xl'>{t("hero.clean")}</h2>
          <h1 style={{color:'rgb(199, 180, 65)'}} className='text-3xl font-semibold pt-5 font-serif lg:text-8xl '>{t("hero.products")}</h1>
        </div>
      </div>
    
    <div className='flex flex-col gap-10 justify-center items-center lg:flex-row lg:gap-20  py-14 px-5'>
      <div data-aos='fade-right' className='flex items-center gap-2'>
        <img src={Group} alt="rasm" />
        <div >
          <h2 className='text-2xl font-bold'>{t("freeDelivery")}</h2>
          <h3 className='text-xl text-gray-500'>{t("freeDeliveryDesc")}</h3>
        </div>
      </div>
      <div data-aos='fade-right' className='flex items-center gap-2'>
      <img src={Group2} alt="rasm" />
        <div>
          <h2 className='text-2xl font-bold'>{t("returnGuarantee")}</h2>
          <h3 className='text-xl text-gray-500'>{t("returnGuaranteeDesc")} </h3>
        </div>
      </div>
      <div data-aos='fade-left' className='flex items-center gap-2'>
      <img src={Group3} alt="rasm" />
        <div >
          <h2 className='text-2xl font-bold'>{t("support")}</h2>
          <h3 className='text-xl text-gray-500'>{t("supportDesc")} </h3>
        </div>
      </div>
      <div data-aos='fade-left' className='flex items-center gap-2'>
      <img src={Group4} alt="rasm" />
        <div >
          <h2 className='text-2xl font-bold'>{t("securePayment")}</h2>
          <h3 className='text-xl text-gray-500'>{t("securePaymentDesc")}</h3>
        </div>
      </div>
    </div>


    <div data-aos='fade-down' className='relative py-10'>
    <div  className=' flex flex-col justify-center items-center bg-gray-700 rounded-4xl hover:shadow-[0px_0px_30px_1px_red] transition duration-300 px-16 py-5 my-10 lg:flex-row lg:justify-between'>
        <div data-aos='fade-right' className='py-17 text-center lg:text-start lg:py-26'>
          <h1 className='text-4xl font-bold lg:text-8xl text-white'>100%</h1>
          <h2 className='text-white text-2xl font-bold pt-10'>{t("materialQuality")}</h2>
        </div>
 
        <div data-aos='fade-left' className='flex flex-col gap-5 w-[240px] z-10 lg:w-[400px]'>
          <h2 className='text-white text-2xl lg:text-4xl font-bold'>{t("ecoSleepTitle")}</h2>
          <h3 className='text-white text-xl font-semibold'>{t("ecoSleepDesc")}</h3>
          <HashLink to={'collection#'} className='px-9 py-3 text-center w-[160px] mx-auto rounded-2xl font-semibold lg:mx-1 bg-white'>{t("collection")}</HashLink>
        </div>
      </div>
      <div data-aos='zoom-in' className='absolute top-0 left-5 lg:-top-4 lg:left-60'>
          <img src={Spalni} className=' w-[250px] lg:w-[840px] ' alt="HomeImg" />
      </div>
    </div>
 

      <div data-aos='zoom-in' className='text-center'>
      <h1 className='text-2xl lg:text-5xl font-bold'>{t("winterCollection")}</h1>
      <h2 className='text-2xl font-medium pt-7'>{t("ecoSleepTitle")}</h2>
      </div>
    <div className='pt-16'>
      <Winter/>
    </div>
    
    <div data-aos='fade-down' className='relative py-10'>
    <div className=' flex flex-col justify-center items-center bg-purple-700 hover:shadow-[0px_0px_30px_1px_red] transition duration-300  rounded-4xl px-16 py-5 my-10 lg:flex-row lg:justify-between'>
        <div data-aos='fade-right' className='py-17 text-center lg:text-start lg:py-26'>
          <h1 className='text-4xl font-bold lg:text-8xl text-white'>100%</h1>
          <h2 className='text-white text-2xl font-bold pt-10'>{t("materialQuality")}</h2>
        </div>
 
        <div data-aos='fade-left' className='flex flex-col gap-5 w-[240px] z-10 lg:w-[400px]'>
          <h2 className='text-white text-2xl lg:text4xl font-bold'>{t("ecoSleepTitle")}</h2>
          <h3 className='text-white text-xl font-semibold'>{t("ecoSleepDesc")}</h3>
          <HashLink to={'collection#'} className='px-9 py-3  text-center   w-[160px] mx-auto z-10 rounded-2xl font-semibold lg:mx-1 bg-white'>{t("collection")}</HashLink>
        </div>
      </div>
      <div data-aos='zoom-in' className='absolute top-0 left-5 lg:-top-4 lg:left-60'>
          <img src={Spalni2} className=' w-[250px] lg:w-[840px] ' alt="HomeImg" />
      </div>
    </div>

      <div data-aos='zoom-in' className='text-center'>
      <h1 className='text-2xl lg:text-5xl font-bold'>{t("autumnCollection")}</h1>
      <h2 className='text-2xl font-medium pt-7'>{t("ecoSleepTitle")}</h2>
      </div>
      <div className='pt-16'>
        <Autumn/>
      </div>

    <div data-aos='fade-down' className='relative py-10  '>
      <div className=' flex flex-col hover:shadow-[0px_0px_30px_1px_red] transition duration-300 justify-center items-center bg-green-700 rounded-4xl px-16 py-5 my-10 lg:flex-row lg:justify-between'>
        <div data-aos='fade-right' className='py-17 text-center lg:text-start lg:py-26'>
          <h1 className='text-4xl font-bold lg:text-8xl text-white'>100%</h1>
          <h2 className='text-white text-2xl font-bold pt-10'>{t("materialQuality")}</h2>
        </div>
 
        <div data-aos='fade-left' className='flex flex-col gap-5 w-[240px] z-10 lg:w-[400px]'>
          <h2 className='text-white text-2xl lg:text-4xl font-bold'>{t("ecoSleepTitle")}</h2>
          <h3 className='text-white text-xl font-semibold'>{t("ecoSleepDesc")}</h3>
          <HashLink to={'collection#'} className='px-9 py-3 text-center w-[160px] mx-auto rounded-2xl font-semibold lg:mx-1 bg-white'>{t("collection")}</HashLink>
        </div>
      </div>
      <div data-aos='zoom-in' className='absolute top-0 left-5 lg:-top-4 lg:left-60'>
          <img src={Spalni3} className=' w-[250px] lg:w-[840px] ' alt="HomeImg" />
      </div>
    </div>
    
    <div data-aos='zoom-in' className='text-center'>
      <h1 className='text-2xl lg:text-5xl font-bold'>{t("summerCollection")}</h1>
      <h2 className='text-2xl font-medium pt-7'>{t("ecoSleepTitle")}</h2>
      </div>
      <div className='pt-16'>
        <Summer/>
      </div>

      <div data-aos='zoom-in' className='text-center pt-6'>
        <h1 className='text-2xl lg:text-4xl font-bold'>{t("news")}</h1>
        <h2 className='text-2xl text-gray-500 font-medium pt-5'>{t("ecoSleepTitle")}</h2>
      </div>
      {/* <Winter/> */}
      <div className='flex items-center flex-col gap-14 pt-16 lg:flex-row'>
        <div data-aos='fade-right' className='w-[300px] lg:w-[430px]'>
          <img className='rounded-2xl' src={PerfectHome} alt="Imglar" />
          <div className='px-5 py-3 flex flex-col gap-2'>
            <h2 className='text-gray-500 text-xl'>{t("newsPosts.0.date")}</h2>
            <h1 className='text-2xl font-bold leading-8 '>{t("newsPosts.0.title")}</h1>
            <h3 className='text-xl text-gray-500 leading-7'>{t("newsPosts.0.description")}</h3>
          </div>
        </div>
        <div data-aos='zoom-in' className='w-[300px] lg:w-[430px]'>
          <img className='rounded-2xl' src={PerfectHome2} alt="Imglar" />
          <div className='px-7 py-3 flex flex-col gap-2'>
            <h2 className='text-gray-500 text-xl'>{t("newsPosts.1.date")}</h2>
            <h1 className='text-2xl font-bold leading-8 '>{t("newsPosts.1.title")}</h1>
            <h3 className='text-xl text-gray-500 leading-7'>{t("newsPosts.1.description")}</h3>
          </div>
        </div>
        <div data-aos='fade-left' className='w-[300px] lg:w-[430px]'>
          <img className='rounded-2xl' src={PerfectHome3} alt="Imglar" />
          <div className='px-5 py-3 flex flex-col gap-2'>
            <h2 className='text-gray-500 text-xl'>{t("newsPosts.2.date")}</h2>
            <h1 className='text-2xl font-bold leading-8 '>{t("newsPosts.2.title")}</h1>
            <h3 className='text-xl text-gray-500 leading-7'>{t("newsPosts.2.description")}</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home