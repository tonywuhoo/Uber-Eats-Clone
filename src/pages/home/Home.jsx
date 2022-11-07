import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home(props) {
  // const { cartItems, onAdd, onRemove } = props;
  
  const handleChange = (event) => {
    props.setAddress(event.target.value);
  };
  const submitAddress = (event) => {
    console.log("Clicked");
  };
  const { products } = props;
  return (
    <div className="home">
      <div
        className="skillet"
        style={{ backgroundImage: "url(/fast-food.png)" }}
      >
        <div className="hungry">Get Food Now!</div>
        <div className="address">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="Address"
            placeholder="Enter address here"
          />
          <button onClick={submitAddress}>
            <Link to="/Product">Delivery</Link>
          </button>
        </div>
      </div>
      {/* <Home className="block col-2"> */}
      {/* <h2>Products</h2> */}
      {/* <div className="row">
        {products.map((Product) => (
          <Product key={Product.id} product={Product} onAdd={onAdd}></Product>
        ))}
      </div> */}
      {/* </Home> */}
    </div>
  )
}
      
