import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../../App.css";

export default function Navbar() {
  // const menuCollapsed = localStorage.getItem('menu-collapsed');
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
        <div className="logo">Fübar Eats</div>
        <button className="login">Login</button>
        <Link to="/register">Register</Link>
        <FaShoppingCart className="cart" />
      </div>
    );
  }
}
