// https://www.youtube.com/watch?v=wAGIOCqS8tk (pagination tutorial)

import React from 'react'
import Products from './Products';

function Pagination({totalProducts, productsPerPage, setCurrentPage}) {
  let pages = [];

  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    pages.push(i)
  }
  return (
    <div>
      {
        pages.map((page, index) => {
          return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination