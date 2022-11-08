import React from 'react'
import "./products.css"
import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { getProducts } from "../../services/products"
import { Link } from "react-router-dom";
import ProductNav from '../../components/ProductNav'
import { getBBQ } from '../../services/products'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Products(props) {
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

  
  function addToCart(product) {
    console.log("Adding product to cart: ", product._id);
    props.setUserCart([...props.userCart,product._id])
 }

  return (
    <div className='product-ctr'>
      <ProductNav/>
    <div className='products'>
      {
      currentProducts.map((product) => {
        return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
      <Link to={`/Products/${product._id}`}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.dsc}
        </Card.Text>
        <Card.Text>
          ${product.price}
         </Card.Text> 
         </Link>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
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
