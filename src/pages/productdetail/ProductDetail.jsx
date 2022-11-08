import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProduct } from "../../services/products";
import "./ProductDetail.css";

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
    <div className="product-detail">
      <img className="product-detail-img" src={product.img} alt={product.name} />
      <div className="detail">
          <div className="name"><h1>{product.name}</h1></div>
          <div className="description"><h3>{product.dsc}</h3></div>
          <div className="price"><h3>{product.price}</h3></div>
          <div className="cart"><button onClick={addToCart}>Add to Cart</button></div>
      </div>
    </div>
  )
}

export default ProductDetail