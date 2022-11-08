import React from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../components/navbar/navbar.css";

export default function Menu({ handleToggle }) {
  return (
    <>
      <div className="navbar">
        <div className="menu" onClick={handleToggle}>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/LoginRegister">Register</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
        <div className="logo">Fübar Eats</div>
        <button className="login btn">
          <Link to="/LoginRegister">Login</Link>
        </button>
        <button className="reg btn">
          <Link to="/LoginRegister">Register</Link>
        </button>
        <FaShoppingCart className="cart" />
      </div>
      <header className="row block center" />
      <div>
        <Link to='/'></Link>
        <h1>Cart</h1>
      </div><div>
        <Link to='/cart'>Cart </Link>
        Cart {''}
        <button className='badge'>{countCartItems}</button>
      </div>
      



      {/* {countCartItems ? (
    ) : (
      '')
    }
    </div>
)
} */}

    </>)
}
