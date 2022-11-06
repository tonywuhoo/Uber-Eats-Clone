import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      
      <div className='hamburger'>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    <div className="logo">Fübar Eats</div>
    <button className='login'><Link to="/register">Login</Link></button>
    <button className=""><Link to="/register">Register</Link></button>
    <Link class ="links" to="/ShoppingCart">< FaShoppingCart className='cart' /></Link>
    </div>
  )
}
