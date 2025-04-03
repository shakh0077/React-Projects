import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../Feature/ContextProvider";
import WebLogo from '../assets/Logo Web.png'
import Mui from "../mui/Mui";

function Navbar() {
  const { cart } = useContext(CartContext) || { cart: [] };

  return (
    <div className="  backdrop-blur-3xl shadow-xl z-10">
      <div className="flex mx-auto w-full max-w-[1440px] justify-between px-5 items-center py-4 text-white">
        <Link to={"/"} className="text-xl font-bold">
          <img className="w-[120px] lg:w-[170px]" src={WebLogo} alt="slapnest" />
        </Link>

        <div className=" gap-2 items-center text-2xl text-gray-500 lg:flex">
          
        <div className="hidden gap-8 items-center text-2xl text-gray-800 lg:flex">
          <Link className="hover:text-yellow-600 transition-all focus:text-amber-500 font-semibold" to={'/'}>Home</Link>
          <Link className="hover:text-yellow-600 transition-all focus:text-amber-500 font-semibold" to={'/collection/all'}>Collection</Link>
          <Link className="hover:text-yellow-600 transition-all focus:text-amber-500 font-semibold" to={'/about'}>About Us</Link>
          <Link className="hover:text-yellow-600 transition-all focus:text-amber-500 font-semibold" to={'/contacts'}>Contacts</Link>

      
        <Link
          to={"/card"}
          className="text-xl font-bold text-red-600 flex items-center gap-1"
        >
          <FaHeart /> {cart?.length || 0}
        </Link>
    

        </div>
        <div className="flex flex-row">
        <select className="bg-yellow-600 font-mono text-white px-2 rounded-2xl" id="">
          <option value="en">En</option>
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
        </select>
        <Mui/>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
