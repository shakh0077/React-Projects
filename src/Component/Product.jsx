import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Feature/ContextProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);

  // Mahsulotni ID bo‘yicha localStorage dan tekshirish
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    if (savedFavorites[product.id]) {
      setIsClicked(true);
    }
  }, [product.id]);

  const handleClick = () => {
    const newState = !isClicked;
    setIsClicked(newState);

    // localStorage ga saqlash
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    savedFavorites[product.id] = newState;
    localStorage.setItem("favorites", JSON.stringify(savedFavorites));

    dispatch({ type: "ADD", product });
  };

  return (
    <div className="w-[250px] mx-auto text-center shadow-2xl rounded-2xl px-3 py-2 md:w-[250px]  lg:w-[340px]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-auto rounded-lg"
      />
      <div className="py-3 relative">
        <button
          className="absolute top-0 right-0 cursor-pointer text-2xl"
          onClick={handleClick}
        >
          {isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-black" />}
        </button>
      </div>
    </div>
  );
};

export default Product;
