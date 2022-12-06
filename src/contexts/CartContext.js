import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = (props) => {

    // const [itemCount, setItemCount] = useState(0);
    
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        console.log(newItem)
        let newCart = [...cartItems]
        newCart.push(newItem)
        setCartItems(newCart)
    }
    
    return ( 
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;