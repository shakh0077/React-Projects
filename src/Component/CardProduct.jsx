import React, { useContext } from "react";
import { CartContext } from "../Feature/ContextProvider";

function CardProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (Index !== -1 && cart[Index].quantity < 10) {
      dispatch({ type: "INCREASE", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (Index !== -1 && cart[Index].quantity > 1) { 
      dispatch({ type: "DECREASE", id });
    }
  };

  return (
    <div className="flex justify-center mt-5 gap-5 w-[200px] items-center  px-5 shadow-xl border rounded-xl lg:w-[350px]">
      <div className=" flex flex-row gap-1.5 py-3.5 justify-center">
        <div className="flex  flex-col gap-3 h-[180px] items-center">
          <img className="w-25 h-25" src={product.thumbnail} alt="productImg" />
          <button
            onClick={() => dispatch({ type: "REMOVE", id: product.id })} 
            className="bg-amber-400 ml-4 p-2 w-25 rounded-xl"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
