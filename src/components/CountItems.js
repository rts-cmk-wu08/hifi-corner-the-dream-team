import { useContext } from "react";
import { DestinationContext } from "../contexts/DestinationContext";


const CountItems = () => {
    const { updateBookings} = useContext(DestinationContext)

    const handleClick = () => {
        updateBookings()
    }

    

    return ( 
        <div className="flex__countitems">
        <button className="minus" onClick={handleDecrease}>-</button>
        <div className="count__box">{handleClick}</div>
        <button className="plus" onClick={ handleClick }>+</button>
        </div>
     );
}
 
export default CountItems;