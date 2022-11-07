import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css"



export default function Menu({handleToggle}) { 
  // const menuCollapsed = localStorage.getItem('menu-collapsed');
  // const [isExpanded, setIsExpanded] = useState(menuCollapsed ? false : true);

  return (
    <div className="navbar">
      <div className="menu" onClick={handleToggle}>
        <div className='links'>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
          <Link to="/about">About Us</Link>
          </div>
      </div>
      <div className="logo">Fübar Eats</div>
        <button className="login">Login</button>
        <Link to="/register">Register</Link>
        <FaShoppingCart className="cart" />
      </div>
  )
}