import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../Menu.jsx";
import "./navbar.css";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  if (isExpanded) {
    return <Menu handleToggle={handleToggle} />;
  } else {
    return (
      <div className="navbar">
        <div className="hamburger" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
          <Link className="links" to="/">
            Fübar Eats
          </Link>
        </div>
        <button className="login btn">
          <Link to="/LoginRegister">Login</Link>
        </button>
        <button className="reg btn">
          <Link to="/LoginRegister">Register</Link>
        </button>
        <Link className="links" to="/ShoppingCart">
          <FaShoppingCart className="cart" />
        </Link>
      </div>
    );
  }
}
