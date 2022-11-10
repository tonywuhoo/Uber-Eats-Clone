import React from 'react'
import "./admin.css"
import { getProducts, createProduct, updateProduct, deleteProduct, } from "../../services/products";
import { useEffect, useState } from "react";

export default function Admin() {
  const [product_name, set_product_name] = useState("");
  const [description, set_description] = useState("");

  const [allProducts, setAllProducts] = useState(null)
  async function fetchAllProductsData() {
    setAllProducts(await getProducts());
  }
  useEffect(() => {
    fetchAllProductsData();
  }, []);
  if (allProducts) {
    console.log("HEREEEEEEEE: ", allProducts)
  }

  const handle = (event) => {
    if (event.target.id === "product-name") {
      set_product_name(event.target.value);
    }
    if (event.target.id === "description") {
      set_description(event.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    const all = {
      name: product_name,
      dsc: description

    }
    console.log(all)
    // createProduct(all)
  }

  return (
    <div className='admin'>
      <h1>admin</h1>
      <form onSubmit={handleSubmit}>
        Create Product :
        <br></br>
        <label htmlFor="product name">name: </label>
        <input type="text" id="product-name" onChange={handle}></input>
        <br></br>
        <label htmlFor="description">description: </label>
        <input type="text" id="description" onChange={handle}></input>
        <input type="submit" />
      </form>

    </div>
  )
}
