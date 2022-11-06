import React from 'react'
import "./products.css"
import { useState, useEffect } from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerpage] = useState(20);

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

 const lastProductIndex = currentPage * productsPerPage;
 const firstProductIndex = lastProductIndex - productsPerPage;
 const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  return (
    <div className='products'>
      {
      currentProducts.map((product, index) => {
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
