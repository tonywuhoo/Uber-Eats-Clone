import React from 'react';
import { useState, useEffect } from 'react';

export default function Delivery() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('https://fubereats-backend-production.up.railway.app/products')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setMenu(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="products-container">
      <h1 className="products-header">Products</h1>
      {
        menu.map((item, index) => {
          return (
            <div>
              <h2 className="product-name">{item.name}</h2>
                <img src={item.img} className="product-image"/>
            </div>
          )
        })
      }
    </div>
  )
}
