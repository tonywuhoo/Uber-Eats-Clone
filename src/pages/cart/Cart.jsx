import React from 'react'
import "./cart.css"

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  //^^ destructuring items to get cart price total
  const taxPrice = itemsPrice * 0.14
  const totalPrice = itemsPrice + taxPrice 

    
  return (
      // aside puts the content side by side
      <aside className="block col-1">
        <div className='Cart'>Cart</div>
      <h2>Cart Items</h2>
      <div>
        {/* when cart is empty, cart reads its empty */}
        {cartItems.length === 0 && <div> Cart Is Empty</div> } </div>
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div className="col-2">{item.name}
            </div>
            <div className="col-2">
              {/* buttons to add more of the same product in the cart */}
            <button onClick={() => onAdd(item)} className="add cart-btn"> + </button>
            <button onClick={()=> onRemove(item)} className="remove cart-btn"> - </button>
          </div>
          <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
            </div>
        ))}
      {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className='row'> 
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2) }</div>
          </div>
          <div className='row'> 
            {/* tax added to the price  */}
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2) }</div>
          </div>
          <div className='row'> 
            {/* to show total price in cart of all items */}
            <div className="col-2"><strong>Total Price</strong></div>

            <div className="col-1 text-right"><strong>${totalPrice.toFixed(2) }</strong></div>
          </div>
          <hr />
          <div className="row">
            {/* button to checkout whats in the cart */}
            <button className="cart-btn" onClick={() => alert('Implement Checkout')}>
              Checkout
          </button>

          </div>
          </>
      )}
    </aside>
  );
}
