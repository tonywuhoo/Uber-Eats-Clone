import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='hamburger'>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="logo">Fübar Eats</div>
      < FaShoppingCart className='cart'/>
    </div>
  )
}
