import { Cart, CartCount, CartDropDown } from "./Cart";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext, useEffect, useRef } from "react";
import { newShoppingCartContext } from "../context/newShoppingCartContext";
import { useLocation } from "react-router-dom";
import useShowDropDown from "../hooks/useShowdropDown";

const CartWidget = () => {
    const location = useLocation()

    //const [showDropDown, setShowDropDown] = useState(false);

    const { ref, isOpen, setIsOpen} = useShowDropDown(false)

    const { cartItems, removeFromCart, totalCount, subTotalPrice, increaseCount, decreaseCount } = useContext(newShoppingCartContext)

    // const  cartRef = useRef(null) 
    // useOutsideAlerter(cartRef)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen]);

    return ( 
        <Cart ref={ref}>
            <FaShoppingCart onClick={handleClick} className="cart__icon white__text" />
            {/* logical and står til at være en if uden else */}
            {totalCount > 0 && <CartCount>{totalCount}</CartCount>}
            <CartDropDown visible={isOpen} >
                {cartItems.map(item => (
                    <article key={item.id}>
                        <p>{item.name}</p>
                        <p>
                            <button onClick={() => decreaseCount(item.id)}>-</button>
                            {" "}{item.count}{" "}
                            <button onClick={() => increaseCount(item.id)}>+</button>
                        </p>
                        <button onClick={() => removeFromCart(item.id)}>x</button>
                    </article>
                ))}
                <p>SubTotal: {subTotalPrice.toLocaleString("EN", {style: "currency", currency: "GBP"})}</p>
            </CartDropDown> 
        </Cart>
     );
}
 
export default CartWidget;
