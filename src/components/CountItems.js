import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";


const CountItems = () => {
    const { addToCart, cartItems } = useContext(CartContext)

    // const [itemCount, setItemCount] = useState(0);

    // const handleDecrease = () => itemCount > 0 && setItemCount(itemCount - 1)

    // const handleClick = () => {
    //     updateBookings()
    // }

    const handleAddToCart = () => {
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
        <Button onclick={handleAddToCart} text="Add to Cart"/>
        {cartItems?.map(item => (<p>{item.name}</p>) ) }
        </div>
     );
}
 
export default CountItems;