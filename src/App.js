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
import ProductDetail from "./pages/productdetail/ProductDetail";
import Cookies from 'js-cookie'
import BBQ from "./pages/products/BBQ"
import Pizzas from "./pages/products/Pizzas"
import Sandwiches from "./pages/products/Sandwiches"
import Burgers from "./pages/products/Burgers"
import Desserts from "./pages/products/Desserts"
import Drinks from "./pages/products/Drinks"


function App() {
  const [products, setProducts] = useState(null);
  const [Encrypted, setEncrypted] = useState("");
  const [address, setAddress] = useState("");
  const [userHash, setuserHash] = useState("");
  const [userID, setuserID] = useState("No UserID")
  const [Username, setUsername] = useState("Not logged in")
  const [LoginStatus, setLoginStatus] = useState(false);
  const [userCart, setUserCart] = useState([])
  let [cartItems, setCartItems] = useState([{
      _id: "636aaf0d303a8090f257dc73",
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
    console.log()
    fetch("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"))
      .then(response => {
        return response.json()
      })
      .then(data => {
        for (let i = 0; i < data.cartItemsByID.length; i++){
          fetch("https://fubereats-backend-production.up.railway.app/products/" + data.cartItemsByID[i])
            .then(response => {
              return response.json()
            })
            .then(data => {
              cartItems.push(data)
            })
        }
        console.log(cartItems)
      })
  }, []);
  
  
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
  })

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
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/BBQ" element={<BBQ />} />
        <Route path="/Pizzas" element={<Pizzas />} />
        <Route path="/Sandwiches" element={<Sandwiches />} />
        <Route path="/Burgers" element={<Burgers />} />
        <Route path="/Desserts" element={<Desserts />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/All" element={<Products />} />
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
