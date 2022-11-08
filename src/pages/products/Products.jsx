import React from 'react'
import "./Products.css"
import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { getProducts } from "../../services/products"
import { Link } from "react-router-dom";
import ProductNav from '../../components/ProductNav'
import { getBBQ } from '../../services/products'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  console.log(product._id);
 }

  return (
    <div>
      <ProductNav/>
    <div className='products'>
      {
      currentProducts.map((product) => {
        return (
          // <div key={product._id} className="product-div">
          //     <Link to={`/Products/${product._id}`}>
          //       <h2>{product.name}</h2>
          //       <img src={product.img} alt={product.name} />
          //       <h3>{product.price}</h3>
          //     </Link>
          //     <button className="product-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          //   </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
      <Link to={`/Products/${product._id}`}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.dsc}
        </Card.Text>
        <Card.Text>
          {product.price}
         </Card.Text> 
         </Link>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
          
        )
      })
    }
    </div>
    <Pagination totalProducts={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}
