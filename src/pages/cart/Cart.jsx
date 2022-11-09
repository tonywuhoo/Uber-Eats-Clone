import React from 'react'
import Products from '../products/Products';
import "../cart/cart.css"

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, addToCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  //^^ destructuring items to get cart price total
  const taxPrice = itemsPrice * 0.14
  const totalPrice = itemsPrice + taxPrice 

  const handleAddToCart = e => {
    e.preventDefault()
    props.addToCart(props.itemId)
  }

  return (
      // aside puts the content side by side
      <aside className="block clm-1">
        {/* <div className='Cart'>Cart</div> */}
      <h2>Cart Items</h2>
      <div>
        {/* when cart is empty, cart reads its empty */}
        {cartItems.length === 0 && <div> Cart Is Empty</div> } </div>
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div className="clm-2">{item.name}
            </div>
            <div className="clm-2">
              {/* buttons to add more of the same product in the cart */}
              {/* <button onClick={handleOnAdd} className="add">+</button>
              <button onClick={() => onRemove(...onRemove, onRemove[Products])} className="remove">-</button>{' '} */}
            </div>
          <div className="clm-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
            </div>
        ))}
  
      {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className='row'> 
            <div className="clm-2">Items Price</div>
            <div className="clm-1 text-right">${itemsPrice.toFixed(2) }</div>
          </div>
          <div className='row'> 
            {/* tax added to the price  */}
            <div className="clm-2">Tax Price</div>
            <div className="clm-1 text-right">${taxPrice.toFixed(2) }</div>
          </div>
          <div className='row'> 
            {/* to show total price in cart of all items */}
            <div className="clm-2"><strong>Total Price</strong></div>

            <div className="clm-1 text-right"><strong>${totalPrice.toFixed(2) }</strong></div>
          </div>
          <hr />
          {/* button for promo code */}
          <div className='' type="text" placeholder="Promo code" />
          <div className="row">
            {/* button to checkout whats in the cart */}
            <button className="button.chkot" onClick={() => alert('Leads to checkout page')}>
              Checkout
          </button>

          </div>
          </>
      )}
    </aside>
  );
}
