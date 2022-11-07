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
  const [cartItems, setCartItems] = useState([{
      _id: "6367e5cdf31be39cd94b0fcb",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Joe's KC BBQ",
      dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
      price: 110.99,
      rate: 5,
      country: "Kansas City, KS"
    }]);
  // const [onAdd, setOnAdd] = useState();

  async function fetchProductsData() {
    setProducts(await getProducts());
    // Step 1: set up services endpoint to get items from cart, then setCartItems => need to set cart items to pass into Cart component
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  const onAdd = (item) => {
    // Need additional API call to update user cart
    console.log("Item added", item)
  }

  const onRemove = (item) => {
    // Need additional API call to update user cart
    console.log("Item removed", item)
  }

  if (!products) {
    console.log("loading...");
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
        <Route path="/Cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path='/Products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
