import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";
import LoginRegister from "./pages/LoginRegister"
import ShoppingCart from "./pages/ShoppingCart";
import { useState } from "react"


function App() {
  const [address, setAddress] = useState("")

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home setAddress={setAddress} />}/>
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </div>
  );
}

export default App;
