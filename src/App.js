import "./App.css";
import "./pages/cart/cart.css"
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
import ProductDetail from "./pages/productdetail/ProductDetail";
import Cookies from 'js-cookie'
import BBQ from "./pages/products/BBQ";
import Pizzas from "./pages/products/Pizza";
import Desserts from "./pages/products/Desserts";
import Drinks from "./pages/products/Drinks";
import Sandwiches from "./pages/products/Sandwiches";


function App() {
  // const items = { items }
  const [products, setProducts] = useState(null);
  // const [deleteItems ] = deleteItems
  const [cartItems, setCartItems] = useState([]);
  // const [onAdd, setOnAdd] = useState();
  
  async function fetchProductsData() {
    setProducts(await getProducts());
    // Step 1: set up services endpoint to get items from cart, then setCartItems => need to set cart items to pass into Cart component
  }
  const addToCart = (itemId) => {
  
    if (itemId) {
      cartItems.add(itemId, 1)
        .then(res => {
        setCartItems(res.cartItems)
  
  useEffect(() => {
    Cookies.set("Username", Username)
    fetch("https://fubereats-backend-production.up.railway.app/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.map((element) => {
          if (element.hash === userHash) {
            console.log(userID)
            setuserID(element._id)
            Cookies.set("UserID", userID)
            Cookies.set("Status", LoginStatus)
          }
        })
      })
    }
}
  // useEffect(() => {
  //   setCartItems([]);
  //   fetchProductsData();
  // }, []);
  
  // // }, []);
  
  //   const onAdd = (Products) => {
  //       fetchProductsData()
  //     }, [Products];  return response.data;
  //     finally {
  //       console.log("Item added", Products)
  //     }
      // Need additional API call to update user cart
      
      
  // const removeItems = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const deleted = await Products.findByIdAndDelete(id)
          
  //     if (deleted) {
  //       return res.status(200).send("Item deleted!");
  //     }
  //     throw new Error("Item not found");
  //   }}
      
    
    if (!Products) {
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
          <Route path="/Cart" element={<Cart cartItems={cartItems} addToCart={addToCart}/>} />
          <Route path="/LoginRegister" element={<LoginRegister />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    );
  
  }


  // if (!products) {
  //   console.log("loading...");
  // } else {
  //   console.log("complete: ", products);
  // }



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home
          address={address}
          setAddress={setAddress} />} />
        <Route path="/BBQ" element={<BBQ />} />
        <Route path="/Pizzas" element={<Pizzas />} />
        <Route path="/Sandwiches" element={<Sandwiches />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Desserts" element={<Desserts />} />
        <Route path="/All" element={<Products />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products
        LoginStatus = {LoginStatus}
        setUserCart={setUserCart}
        userCart={userCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/LoginRegister" element={<LoginRegister
          Encrypted={Encrypted}
          setEncrypted={setEncrypted}
          userHash={userHash}
          setuserHash={setuserHash}
          Username={Username}
          setUsername={setUsername}
          LoginStatus={LoginStatus}
          setLoginStatus={setLoginStatus}
          userCart={userCart}
          setUserCart={setUserCart}
          userID={userID}
          setuserID={setuserID}/>} />
        <Route path="/Products/:id" element={<ProductDetail
          LoginStatus = {LoginStatus}
          setUserCart={setUserCart}
          userCart={userCart} />} />
      </Routes>
    </div>
  );
}

export default App;

