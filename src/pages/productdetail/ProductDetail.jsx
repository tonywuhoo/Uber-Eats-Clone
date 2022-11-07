import React from 'react'
import { useState, useEffect } from 'react';
// import { getStudent, deleteStudent } from '../services/students';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const [product, getProduct] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail