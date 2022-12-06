import { createContext, useState } from "react";

export const DestinationContext = createContext()

const DestinatioProvider = (props) => {

    const [bookings, setBookings] = useState(0);

    const [itemCount, setItemCount] = useState(0);

    const handleIncrease = () => itemCount < 10 && setItemCount(itemCount + 1)
    const handleDecrease = () => itemCount > 0 && setItemCount(itemCount - 1)

    const updateBookings = () => {
        setBookings(bookings + 1)
        handleIncrease()
        itemCount()
    }
    
    return ( 
        <DestinationContext.Provider value= {{ bookings, setBookings, updateBookings }}>
            {props.children}
        </DestinationContext.Provider>
     );
}
 
export default DestinatioProvider;