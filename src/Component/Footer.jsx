import { Link } from 'react-router-dom'
import WebLogo from '../assets/Logo Web.png'

function Footer() {
  return (
    <>
    <div className='  mt-[150px] mb-10 text-center  px-5 w-full mx-auto lg:max-w-[1440px] lg:text-start'>
      <div className='flex flex-col gap-10 items-center lg:flex-row lg:gap-20'>
        <div className='w-[300px]'>
          <img className='w-[320px]' src={WebLogo} alt="" />
          <h2 className='text-xl font-semibold leading-6 text-gray-700'>'Eco-Friendly Sleep Products' is a company that has been producing cotton fabrics for global use for many years</h2>
        </div>
        <div className='w-[200px]'>
          <h1 className='text-2xl font-extrabold text-gray-800'>Menu</h1>
          <div className='flex flex-col gap-1 px-4'>
            <Link className='text-xl font-semibold text-gray-600' to={'/'}>Home</Link>
            <Link className='text-xl font-semibold text-gray-600' to={'/collection'}>Collection</Link>
            <Link className='text-xl font-semibold text-gray-600' to={'/about'}>About Us</Link>
            <Link className='text-xl font-semibold text-gray-600' to={'/contacts'}>Contacts</Link>
          </div>
        </div>
        <div className='w-[300px] lg:w-[330px]'>
          <h1 className='text-2xl font-extrabold text-gray-800'>Contacts</h1>
          <h2 className='text-xl font-normal text-gray-600'>Bukhara, st. Alpomysh 80.</h2>
          <h2 className='text-xl font-normal text-gray-600'>Email: sleepnest@gamil.com</h2>
          <h2 className='text-xl font-normal text-gray-600'>Telegram: sleepnest</h2>
          <h2 className='text-xl font-normal text-gray-600'>+998 94 033 72 12</h2>
        </div>
        <div className='w-[290px]  relative flex flex-col gap-3 lg:w-[380px]'>
          <h1 className='text-2xl font-extrabold text-gray-800'>Subscribe to our newsletter</h1>
          <input type="text" placeholder='Email' className='pl-4 py-3 w-[300px] text-xl border rounded-xl lg:w-[340px]' />
          <button className='text-xs bg-red-500 rounded text-white px-3 py-2 absolute top-21.5 right-0 lg:top-13.5 lg:right-9'>Subscribe</button>
          <h2 className='text-base font-medium text-gray-700'>Please select at least one list.</h2>
        </div>
      </div>
    </div>
    <div className='bg-black py-5'>
      <div className=' px-5 w-full mx-auto lg:max-w-[1440px]'>
      <h1 className='text-gray-600'>© 2024 LLC Eco-Friendly Sleep Products. All rights reserved.</h1>
      </div>
    </div>
    </>
  )
}

export default Footer