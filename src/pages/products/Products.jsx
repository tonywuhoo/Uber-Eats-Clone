import React from 'react'
import "./Products.css"
import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { getProducts } from "../../services/products"
import { Link } from "react-router-dom";
import ProductNav from '../../components/ProductNav'
import { getBBQ } from '../../services/products'

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

 function addToCart(product){
  console.log(product);
 }

 function getProductDetail(){
  console.log('Clicking')
 }

  return (
    <div>
      <ProductNav/>
    <div className='products'>
      {
      currentProducts.map((product) => {
        return (
          <div key={product._id} className="product-div">
              <Link to={`/Products/${product._id}`}>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} />
                <h3>{product.price}</h3>
              </Link>
              <button className="product-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          
        )
      })
    }
    </div>
    <Pagination totalProducts={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}
