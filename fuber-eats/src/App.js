import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/delivery/Delivery";
import LoginRegister from "./pages/loginregister/LoginRegister";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import { getProducts } from "./services/products";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(null);

  async function fetchProductsData() {
    setProducts(await getProducts());
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  if (!products) {
    return "loading...";
  } else {
    console.log("complete: ", products);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
