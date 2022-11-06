import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";
import LoginRegister from "./pages/LoginRegister"
import About from './pages/About';
import Products from "./pages/Products"
import Cart from "./pages/Cart";
import { useState } from "react"


function App() {
  const [address, setAddress] = useState("")
  const [User, setUser] = useState("")
  const [Password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [LoginStatus, setLoginStatus] = useState(false)
  const [Encrypted, setEncrypted] = useState("")

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setAddress={setAddress} />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
