import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProduct } from "../../services/products"

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
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name}/>
      <h3>{product.dsc}</h3>
      <h3>{product.price}</h3>
      <button className="product-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductDetail