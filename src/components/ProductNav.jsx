import React from 'react'
import { Link } from "react-router-dom";
import { getBBQ } from '../services/products';
import { useEffect, useState } from 'react';

export default function ProductNav() { 
  const [products, setProducts] = useState(null);
  

  async function fetchProductsData() {
    setProducts(await getBBQ());
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  console.log(products)

  return (
    <div className="product-navbar">
      <button className="bbq" >
          <Link to="/Products">BBQ</Link>
      </button>
      <button className="pizzas">
          <Link to="/LoginRegister">Pizzas</Link>
      </button>
      <button className="sandwiches">
          <Link to="/LoginRegister">Register</Link>
      </button>
      <button className="desserts">
          <Link to="/LoginRegister">Register</Link>
      </button>
      <button className="drinks">
          <Link to="/LoginRegister">Register</Link>
      </button>
    </div>
  )
}