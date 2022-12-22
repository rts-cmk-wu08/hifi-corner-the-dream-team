import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //localstorage
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalCount(
      cart.reduce((totalCount, item) => totalCount + item.count, 0)
    );
    setTotalPrice(
      cart.reduce((price, item) => price + item.price * item.count, 0)
    );
  }, [cart]);

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };
  const removeFromCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      count: 1,
    });
  };
  const handleRemoveFromCart = (product) => {
    if (totalCount > 0) {
      removeFromCart({
        id: product.id,
        title: product.title,
        subtitle: product.subtitle,
        price: product.price,
        count: -1,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalCount,
        totalPrice,
        addToCart,
        handleAddToCart,
        handleRemoveFromCart,
        removeFromCart,
        //increaseCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
