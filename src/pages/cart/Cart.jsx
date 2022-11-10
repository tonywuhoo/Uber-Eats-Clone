import React from "react";
import "./cart.css";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  //^^ destructuring items to get cart price total
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

  return (
    // aside puts the content side by side
    // <aside className="block clm-1">
    <div className="main-container">
      <h2>Cart Items</h2>
      <div className="container-wrap">
        <div className="cart">
          <div>
            {/* when cart is empty, cart reads its empty */}
            {cartItems.length === 0 && <div> Cart Is Empty</div>}
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="item">
              <div className="item-name">{item.name}</div>
              <div className="button-container">
                {/* buttons to add more of the same product in the cart */}
                <button onClick={() => onAdd(item)} className="button-add">
                  +
                </button>
                <button
                  onClick={() => onRemove(item)}
                  className="button-remove"
                >
                  -
                </button>
              </div>
              <div className="total-item-cost">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
              <div className="item-quantity">
                {item.qty}
              </div>

            </div>
          ))}
        </div>
        {cartItems.length !== 0 && (
          <>
            <div className="checkout-container">
              <div>Items Price: ${itemsPrice.toFixed(2)}</div>

              {/* tax added to the price  */}
              {/* <div className="tax-price-title">Tax Price</div> */}
              <div className="tax-price">Tax Price: ${taxPrice.toFixed(2)}</div>

              {/* to show total price in cart of all items */}
              <div className="total-price">
                Total Price: ${totalPrice.toFixed(2)}
              </div>

              {/* button to checkout whats in the cart */}
              <button
                className="button-chkot"
                onClick={() => alert("Checkout")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      {/* </aside> */}
    </div>
  );
};