import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProduct } from "../../services/products";
import "./ProductDetail.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cookies from 'js-cookie'
import axios from "axios"
import Products from '../products/Products';

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

  async function addToCart(product) {
    if (product._id === undefined || product._id === null) {
      alert("This button currently doesn't work")
      return
    }
    if (Cookies.get("Status") === "false") {
      console.log("Not logged in")
      alert("You must be logged in to add to cart!")
    } else {
      fetch("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"))
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data.cartItemsByID)
          if (data.cartItemsByID.includes(product._id)) {
            alert("Product has been added to cart already")
          }
          else {
            let local = [...data.cartItemsByID, product._id]
            axios.put("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"), {
              cartItemsByID: [...local]
            })
          }
        })
    }
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