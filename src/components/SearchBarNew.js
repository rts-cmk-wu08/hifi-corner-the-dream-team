// import "./searchbar.scss"
import { FaSearch } from "react-icons/fa"
import { createSearchParams, useNavigate } from "react-router-dom";


const SearchBar = ({placeholder}) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); // når du laver dennne her skal du huske reset som er på linje 13. Brug det til formular f.eks. searchbar, kontaktformular!!!!!!!!
        let params  = { search: e.target.search.value, 
                      name: "Epos" }
        navigate({
                 pathname:"/productpage",
                 search: `?${createSearchParams(params)}`
                })
        console.log(e.target.search.value)
        e.target.reset() // reset function
    }

    return ( 
        <form onSubmit={handleSubmit} className="searchbar__inner">
            <input type="search" name="search" id="search" placeholder={placeholder}/>
            <button className="searchIcon" type="submit">
                <FaSearch />
            </button>
        </form>
     );
}
 
export default SearchBar;