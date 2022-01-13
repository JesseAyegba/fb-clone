import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <BiSearchAlt2 className="searchbar__icon" />
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search Facebook"
      />
    </div>
  );
};

export default SearchBar;
