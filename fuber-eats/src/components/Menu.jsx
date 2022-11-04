import React from "react";

export default function Menu() {
  const handleClick = () => {};

  return (
    <div>
      <ul class="menu">
        <li>BBQ</li>
        <li>Pizza</li>
        <li>Sandwiches</li>
        <li>Drinks</li>
        <li>Desserts</li>
        <li>About Us</li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}
