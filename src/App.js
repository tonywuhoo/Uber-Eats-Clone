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
import ProductDetail from './pages/productdetail/ProductDetail'

function App() {
  const [products, setProducts] = useState(null);
  const [Encrypted, setEncrypted] = useState("");
  const [address, setAddress] = useState("");
  const [userHash, setuserHash] = useState("");

  async function fetchProductsData() {
    setProducts(await getProducts());
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  if (!products) {
    console.log("loading...");
  } else {
    console.log("complete: ", products);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home
          address={address}
          setAddress={setAddress}
        />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/LoginRegister" element={<LoginRegister
          Encrypted={Encrypted}
          setEncrypted={setEncrypted}
          userHash={userHash}
          setuserHash={setuserHash}
        />} />
        <Route path='/Products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
