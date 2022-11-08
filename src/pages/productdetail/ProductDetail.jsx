import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProduct } from "../../services/products";
import "./ProductDetail.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductDetail(props) {
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
    console.log(id);
    props.setUserCart([...props.userCart,id])
   }

  return (
<<<<<<< HEAD
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
=======
    <div className="product-detail">
      <img className="product-detail-img" src={product.img} alt={product.name} />
      <div className="detail">
          <div className="name"><h1>{product.name}</h1></div>
          <div className="description"><h3>{product.dsc}</h3></div>
          <div className="price"><h3>${product.price}</h3></div>
          <div className="cart"><button onClick={addToCart}>Add to Cart</button></div>
>>>>>>> 6db27c889fceb1f4e6727b779d2e23b445473ab9
      </div>
  )
}

export default ProductDetail