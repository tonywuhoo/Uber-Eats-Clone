import React from 'react'
import "./products.css"
import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { getProducts } from "../../services/products"
import { Link } from "react-router-dom";
import ProductNav from './ProductNav'
import { getDesserts } from '../../services/products'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cookies from 'js-cookie'
import axios from "axios"
export default function Products(props) {
  const [desserts, setDesserts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerpage] = useState(20);
  const [localData, setlocalData] = useState([])
  async function fetchProductsData() {
    setDesserts(await getDesserts());
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
  const currentProducts = desserts.slice(firstProductIndex, lastProductIndex);
  
  let [grabItem, setItem] = useState("")
  
  async function addToCart(product) {
    fetch("https://fubereats-backend-production.up.railway.app/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        for (let i = 0; i < data.length; i++){
          if (data[i].img === product.img) {
            grabItem = data[i]._id
          }
        }
        if (Cookies.get("Status") === "false") {
          console.log("Not logged in")
          alert("You must be logged in to add to cart!")
        } else {
          console.log(grabItem)
          fetch("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"))
            .then(response => {
              return response.json()
            })
            .then(data => {
              if (data.cartItemsByID.includes(grabItem)) {
                alert("Product has been added to cart already")
              }
              else {
                let local = [...data.cartItemsByID, grabItem]
                console.log(local)
                axios.put("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"), {
                  cartItemsByID: [...local]
                })
              }
            })
        }
      })
  }

  return (
    <div className='product-ctr'>
      <ProductNav />
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
                  <Button id={product._id} variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Body>
              </Card>

            )
          })
        }
      </div>
      <Pagination totalProducts={desserts.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}
