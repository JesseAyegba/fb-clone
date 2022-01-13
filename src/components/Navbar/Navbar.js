import "./Navbar.css";
import NavIcon from "../NavIcon/NavIcon";
import SearchBar from "../SearchBar/SearchBar";
import { BsFacebook } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <BsFacebook className="navbar__icon" />
        <SearchBar />
      </div>
      <div className="navbar__middle"></div>
      <div className="navbar__right">
        <NavIcon />
        <NavIcon />
        <NavIcon />
        <NavIcon />
      </div>
    </nav>
  );
};

export default Navbar;
