import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProduct } from "../../services/products";
import "./ProductDetail.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductDetail() {
  const [product, setProduct] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      let oneProduct = await getProduct(id)
      setProduct(oneProduct)
    }
  
    fetchProduct()
  }, [id])

  function addToCart(product){
    console.log(product._id);
   }

  return (
    <div>
    <Link to={`/Products/`}>
      <div className="back">Back to Products</div>
      </Link>
      <div className="detail-container">
    <Card style={{ width: '30rem' }}>
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
        </div>
      </div>
  )
}

export default ProductDetail