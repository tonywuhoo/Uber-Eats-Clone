import React from 'react'
import "./cart.css"
import { useEffect, useState } from "react";

export default function Cart(props) {
  const { cartItems, onRemove } = props;


  function completeCheckout() {
    console.log(cartItems)
    console.log(props.subTotal)
  }
    
  return (
    <div class="Cart" >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 class="title" >Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div> Cart Is Empty</div> } </div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className='Products' >{item.name}
              <br></br>${item.price.toFixed(2)}
            <button onClick={()=> onRemove(item)} className="remove cart-btn"> - </button>
          </div>
            </div>
        ))}
      {cartItems.length !== 0 && (
        <>
        <hr></hr>
            <div>Subtotal: ${props.subTotal} </div>
          <div>Tax: ${Math.floor((props.subTotal * 1.085) - props.subTotal) }</div>
          <div><strong>Total: {Math.floor(props.subTotal * 1.085)}</strong></div>
          <hr />
            <button className="cart-btn" onClick={completeCheckout}>
              Checkout
          </button>
          </>
      )}
    </div>
  );
}
