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
  const [LoginStatus, setLoginStatus] = useState(false)
  const [Encrypted, setEncrypted] = useState("")
  const [RegisterUser, setRegisterUser] = useState("")
  const [RegisterPassword, setRegisterPassword] = useState("")
  const [RegisterConfirmPassword, setRegisterConfirmPassword] = useState("")
  const [LoginUser, setLoginUser] = useState("")
  const [LoginPassword, setLoginPassword] = useState("")
  const [LoginConfirmPassword, setLoginConfirmPassword] = useState("")

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setAddress={setAddress} />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/LoginRegister" element={<LoginRegister
          RegisterUser={RegisterUser}
          setRegisterUser={setRegisterUser}
          RegisterPassword={RegisterPassword}
          setRegisterPassword={setRegisterPassword}
          RegisterConfirmPassword={RegisterConfirmPassword}
          setRegisterConfirmPassword={setRegisterConfirmPassword}

          LoginUser = {LoginUser}
          setLoginUser = {setLoginUser}
          LoginPassword = {LoginPassword}
          setLoginPassword = {setLoginPassword}
          LoginConfirmPassword = {LoginConfirmPassword}
          setLoginConfirmPassword = {setLoginConfirmPassword}
          
          LoginStatus={LoginStatus}
          setLoginStatus={setLoginStatus}
          Encrypted={Encrypted}
          setEncrypted={setEncrypted}
        />} />
      </Routes>
    </div>
  );
}

export default App;
