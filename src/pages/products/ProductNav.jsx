import React from 'react'
import { Link } from "react-router-dom";
import { getBBQ } from '../../services/products';
import { useEffect, useState } from 'react';

export default function ProductNav() { 
  const [products, setProducts] = useState(null);
  

  async function fetchProductsData() {
    setProducts(await getBBQ());
  }

  useEffect(() => {
    fetchProductsData();
  }, []);


  return (
    <div className="product-navbar">
      <button className="bbq" >
          <Link to="/BBQ">BBQ</Link>
      </button>
      <button className="pizzas">
          <Link to="/Pizzas">Pizzas</Link>
      </button>
      <button className="sandwiches">
          <Link to="/Sandwiches">Sandwiches</Link>
      </button>
      <button className="desserts">
          <Link to="/Desserts">Desserts</Link>
      </button>
      <button className="drinks">
          <Link to="/Drinks">Drinks</Link>
      </button>
      <button className="all">
          <Link to="/Products">All</Link>
      </button>
    </div>
  )
}