import React from "react";

export default function Main(props) {
  const { products } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((Product) => (
          <Product key={Product.id} product={Product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
