import axios from "axios";
import { useState, useEffect } from "react"

const HejHej = () => {

const [loading, setLoading] = useState(true);
const [error, seterror] = useState();
const [hejHej, setHejHej] = useState();

useEffect(() => {
    axios("http://localhost:4000/products")
    .then(response => console.log(response.data))
}, []);

    return ( 
        <></>
     );
}
 
export default HejHej;