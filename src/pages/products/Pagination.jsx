import React from 'react'
import Products from './Products';

function Pagination({totalProducts, productsPerPage}) {
  let pages = [];

  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    pages.push(i)
  }
  return (
    <div>
      {
        pages.map((page, index) => {
          return <button key={index}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination