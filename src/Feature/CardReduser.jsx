// Savatchadagi jami mahsulotlar sonini hisoblash
export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
  };
  
  
  export const totalPrice = (cart) => { // ✅ `totalPrise` o'rniga `totalPrice`
    return cart.reduce((total, product) => total + product.quantity * product.price, 0); // ✅ `prise` → `price`
  };
  
  const CardReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existProduct = state.find((p) => p.id === action.product.id);
        if (existProduct) {
          return state.map((p) =>
            p.id === action.product.id
              ? { ...p, quantity: (p.quantity || 1) + 1 }
              : p
          );
        }
        return [...state, { ...action.product, quantity: 1 }];
  
      case "REMOVE":
        return state.filter((p) => p.id !== action.id);
  
      case "INCREASE":
        return state.map((p) =>
          p.id === action.id && p.quantity < 10
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
  
      case "DECREASE":
        return state.map((p) =>
          p.id === action.id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        );
  
      default:
        return state;
    }
  };
  
  export default CardReducer;
  