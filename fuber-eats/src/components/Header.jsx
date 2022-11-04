import React from "react";

export default function Header(props) {
  const {countCartItems} = props
  return (
    <header className="row block center">
      <div>
        <Link to='/href="#/"'></Link>
          <h1>Cart</h1>
      </div>
      <div>
        <Link to='#/cart'>Cart </Link>
        Cart {''}
        {countCartItems ? (
          <button className='badge'>{countCartItems}</button>  
        ) : (
          '')
      }

        <Link to='/signin'>Sign In </Link>
      </div>
    </header>
  );
}
