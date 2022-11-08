import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home(props) {
  const handleChange = (event) => {
    props.setAddress(event.target.value);
  };
  const submitAddress = (event) => {
    console.log("Clicked");
  };
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
          <button className="food" onClick={submitAddress}>
            <Link to="/Products">Delivery</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
