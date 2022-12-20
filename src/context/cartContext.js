import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //localstorage
  const [cart, setCart] = useState([
    {
      id: 126,
      image: "",
      name: "Creek Classic",
      stock: 8,
      count: 5,
      price: 3449,
    },
    {
      id: 136,
      image: "",
      name: "Creek not-Classic",
      stock: 6,
      count: 1,
      price: 449,
    },
  ]);
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

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseCount = (id) => {
    setCart(
      cart.map((item) => {
        //tjek om det passer til dit object
        if (item.id === id && item.count < item.stock) {
          item.count = item.count + 1;
          return item;
        } else {
          return item;
        }
      })
    );
  };

  // const decreaseCartQuantity = (id) => {
  //   setCart((cart) => {
  //     if (cart.find((item) => item.id === id)?.quantity === 1) {
  //       return cart.filter((item) => item.id !== id);
  //     } else {
  //       return cart.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalCount,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
