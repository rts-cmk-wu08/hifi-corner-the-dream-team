import { useState } from "react";
import "./SearchBar";
import {BrowserRouter as Router, Link} from "react-router-dom"
import { FaSearch } from 'react-icons/fa';
var data = require("./MOCK_DATA.json");

export default function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);

    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
    
      <div className="search-container">
        <div className="search-inner">
          <input placeholder="Search product..." type="text" value={value} onChange={onChange} className="input__search" />
          <div className="fontuser">
        <Router>
      <Link to={"/Tets"}>
      <FaSearch color="000000" />
      </Link>
        </Router>
          </div>
          </div>
    <div className="dropdown">
          {data
            .filter((item) => {
                const searchTerm = value.toLowerCase();
                const searchProducts = item.search_products.toLowerCase();
                
                return (
                    searchTerm &&
                    searchProducts.startsWith(searchTerm) &&
                    searchProducts !== searchTerm
                    );
                })
                .slice(0, 10)
                .map((item) => (
                    <div onClick={() => onSearch(item.search_products)} className="dropdown-row" key={item.search_products} > {item.search_products} </div>
                    ))}
        </div>
      </div>
    </div>
  );
}
