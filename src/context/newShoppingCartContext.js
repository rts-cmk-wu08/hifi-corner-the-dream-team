//Har lavet det her i praktikperiode----
import { createContext, useState, useEffect } from "react"

export const newShoppingCartContext = createContext();

const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const [totalCount, setTotalCount] = useState(0);
    const [subTotalPrice, setSubTotalPrice] = useState(0);

    const updateCount = () => setTotalCount(cartItems.reduce((count, item) => count + item.count, 0))

    const updateTotalPrice = () => setSubTotalPrice(cartItems.reduce((subTotal, item) => subTotal + item.count * item.price, 0))

    useEffect(() => {
        updateCount()
        updateTotalPrice()
    }, [cartItems]);

    const addToCart = (newItem) => {
        console.log("kom du her til")
        // check om varen ikke allerede ligger i kurven
        // hvis den ikke er der, så skal du tilføje den
        if (!cartItems.some(item => item.id  === newItem.id)) {
            setCartItems([...cartItems, newItem])
        }
    }

    const removeFromCart = (id) => { //       item.id ikke lig med id
        setCartItems(cartItems.filter(item => item.id !== id))
    } 

    // går dem igennem en af gangen
    const increaseCount = (id) => {
        setCartItems(
            cartItems.map(item => {
                //&& hvis man skal begge to true
                if (item.id === id &&  item.count < item.stock) {
                    item.count = item.count + 1;
                    return item
                } else {
                    return item
                }
            })
            
            
        )
    }

    const decreaseCount = (id) => {
        let newCart = cartItems.map(item => {
         if (item.id === id && item.count > 0) {
                item.count = item.count - 1;
                return item
            } else {
                return item
            }
        })
        setCartItems(newCart.filter(item => item.count > 0))
    }

    return ( 
        <newShoppingCartContext.Provider value={{cartItems, addToCart, removeFromCart, increaseCount, totalCount, subTotalPrice, decreaseCount}}>
            {children}
        </newShoppingCartContext.Provider>
     );
}
 
export default CartProvider;