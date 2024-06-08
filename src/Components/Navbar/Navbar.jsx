import { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState("home");

  return (
    <div className="navbar">
      <h3 className="logo">
        Taste of <span>Ghana</span>
      </h3>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            className={hover === "home" ? "active" : ""}
            onClick={() => setHover("home")}
          >
            Home
          </li>
        </Link>
        <Link to="/menu">
          <li
            className={hover === "menu" ? "active" : ""}
            onClick={() => setHover("menu")}
          >
            Menu
          </li>
        </Link>
        <Link to="/about">
          {" "}
          <li
            className={hover === "about" ? "active" : ""}
            onClick={() => setHover("about")}
          >
            About Us
          </li>
        </Link>
        <Link to='contact'>
          <li
            className={hover === "contact" ? "active" : ""}
            onClick={() => setHover("contact")}
          >
            Contact Us
          </li>
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
          <img src={assets.cart_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
