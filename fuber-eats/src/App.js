import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";
import LoginRegister from "./pages/LoginRegister";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
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
