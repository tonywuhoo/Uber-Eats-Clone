import React from 'react'
import "./products.css"
import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { getProducts } from "../../services/products"

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerpage] = useState(20);

  async function fetchProductsData() {
    setProducts(await getProducts());
  }
  
  useEffect(() => {
    try {
      fetchProductsData();
    } catch (err) {
      throw err;
    }
 }, []);

 const lastProductIndex = currentPage * productsPerPage;
 const firstProductIndex = lastProductIndex - productsPerPage;
 const currentProducts = products.slice(firstProductIndex, lastProductIndex);

 function addToCart(e){
  console.log(e.target.parentElement.className);
 }

  return (
    <div>
    <div className='products'>
      {
      currentProducts.map((product, index) => {
        return (
          <div key={index} className={product._id}>
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} />
            <h3>{product.price}</h3>
            <button className="product-cart" onClick={addToCart}>Add to Cart</button>
          </div>
        )
      })
    }
    </div>
    <Pagination totalProducts={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}
