import { IoSearch } from "react-icons/io5"
import List from "../components/List"

function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

const SearchBar = () => {
    return ( 
        <div className="search__wrapper">
            <div className="search">
            <input type="search" name="search" id="search outlined-basic" className="searchbar" placeholder="Search product..."  variant="outlined" fullwidth label="Search"/>
            <List input={inputText} />
            <IoSearch className="search__icon"/>
            </div>
        </div>
    );
}
 
export default SearchBar;