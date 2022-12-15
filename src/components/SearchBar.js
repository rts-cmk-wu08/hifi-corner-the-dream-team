<<<<<<< HEAD
// import { IoSearch } from "react-icons/io5";
=======
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
>>>>>>> 7804c93ed8e1c6dbaf9f8ad53725e043497edb6d

  return (
<<<<<<< HEAD
    <div>
      <input
        type="search"
        name="search"
        id="search"
        className="searchbar"
        placeholder="Search product..."
      />
      {/* <IoSearch className="searchbar__icon" /> */}
    </div>
  );
};
=======
    <div className="searchbar">
      <div className="searchbar__inner">
        <input placeholder="Search product..." type="text" value={value} onChange={onChange} className="searchbar__input"/>
      <div className="searchbar__btn">
        <Link to={"/Tets"}>
          <FaSearch color="000000" />
        </Link>
        </div>
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const searchProducts = item.search_products.toLowerCase();
>>>>>>> 7804c93ed8e1c6dbaf9f8ad53725e043497edb6d

            return (
              searchTerm &&
              searchProducts.startsWith(searchTerm) &&
              searchProducts !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.search_products)}
              className="dropdown-row"
              key={item.search_products}
            >
              {" "}
              {item.search_products}{" "}
            </div>
          ))}
      </div>
    </div>
    
  );
}
