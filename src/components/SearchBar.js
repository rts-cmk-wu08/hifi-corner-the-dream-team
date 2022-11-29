import { IoSearch } from "react-icons/io5"

const SearchBar = () => {
    return ( 
        <div>
            <input type="search" name="search" id="search" className="searchbar" placeholder="Search product..." />
            <IoSearch className="search__icon"/>
        </div>
    );
}
 
export default SearchBar;