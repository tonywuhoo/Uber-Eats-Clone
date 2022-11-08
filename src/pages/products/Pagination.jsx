// https://www.youtube.com/watch?v=wAGIOCqS8tk (pagination tutorial)

import React from 'react'
import Products from './Products';
import './Pagination.css'
import Button from 'react-bootstrap/Button';

function Pagination({totalProducts, productsPerPage, setCurrentPage}) {
  let pages = [];

  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    pages.push(i)
  }
  return (
    <div className="pages">
      {
        pages.map((page, index) => {
          return <button variant="primary" key={index} onClick={() => setCurrentPage(page)} className="page-button">{page}</button>
        })
      }
    </div>
  )
}

export default Pagination