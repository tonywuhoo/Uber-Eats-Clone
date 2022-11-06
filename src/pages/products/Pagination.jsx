import React from 'react'
import Products from './Products';

function Pagination({totalProducts, productsPerPage}) {
  let pages = [];
  let i;
  
  for(let int = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    pages.push(i)
  }
  return (
    <div>Pagination</div>
  )
}

export default Pagination