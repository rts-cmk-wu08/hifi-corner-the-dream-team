import { useState, useContext } from "react";
import { DestinationContext } from "../contexts/DestinationContext";


const CountItems = () => {
    const [itemCount, setItemCount] = useState(0);

    const handleIncrease = () => itemCount < 10 && setItemCount(itemCount + 1)
    const handleDecrease = () => itemCount > 0 && setItemCount(itemCount - 1)

    const { updateBookings} = useContext(DestinationContext)

    const handleClick = () => {
        updateBookings()
    }

    return ( 
        <div className="flex__countitems">
        <button className="minus" onClick={handleDecrease}>-</button>
        <div className="count__box">{itemCount}</div>
        <button className="plus" onClick={handleIncrease}>+</button>
        <button onClick={handleClick}>Book this destination</button>
        </div>
     );
}
 
export default CountItems;