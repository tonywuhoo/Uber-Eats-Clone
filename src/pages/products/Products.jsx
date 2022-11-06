import React from 'react'
import "./products.css"
import { useState, useEffect } from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fubereats-backend-production.up.railway.app/products')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setProducts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className='products'>
      {
      products.map((product, index) => {
        return (
          <div>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <h3>{product.price}</h3>
          <button>Add to Cart</button>
          </div>
        )
      })
    }
    </div>
  )
}
