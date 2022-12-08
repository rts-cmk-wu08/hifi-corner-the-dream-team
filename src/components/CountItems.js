import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa"


const CountItems = () => {
    const { addToCart, cartItems } = useContext(CartContext)

    const [itemsTotal, setItemsTotal] = useState();

    // const [itemCount, setItemCount] = useState(0);

    // const handleDecrease = () => itemCount > 0 && setItemCount(itemCount - 1)

    // const handleClick = () => {
    //     updateBookings()
    // }

    // skal bruge et reduce array, men over et array med objects

    useEffect(() => {
        
    }, [cartItems]);

    const handleAddToCart = () => {
        console.log("hej hej")
        addToCart({
            name: "Apples",
            price: 20.00 , 
            count: 3 
        })
    }
    
    cartItems && console.log(cartItems)

    return ( 
        <div className="flex__countitems">
        <div className="count__box"></div>
        <button onClick={handleAddToCart}>hej hej</button>
        {cartItems?.map(item => (<p>{item.count}</p>) ) }
        <FaShoppingCart />
        </div>
     );
}
 
export default CountItems;