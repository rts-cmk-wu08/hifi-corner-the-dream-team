import { createContext, useState } from "react";

export const DestinationContext = createContext()

const DestinatioProvider = (props) => {

    const [bookings, setBookings] = useState(0);

    const updateBookings = () => {
        setBookings(bookings + 1)
    }

    return ( 
        <DestinationContext.Provider value= {{ bookings, setBookings, updateBookings }}>
            {props.children}
        </DestinationContext.Provider>
     );
}
 
export default DestinatioProvider;