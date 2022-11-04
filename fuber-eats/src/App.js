import Menu from "./Menu.jsx"
import Delivery from './Delivery.jsx';
import Cart from "./Cart.jsx";
import './App.css';
import { useState } from "react"
import allProductData from "./allProductData.js";
import sha256 from 'js-sha256'

export default function Home() {

  // Search Logic
  const [searchParam, setsearchParams] = useState("")

  const handleChange = event => {
    setsearchParams(event.target.value)
    console.log(searchParam)
  }

  const onSearch = event => {
    event.preventDefault()
    let result = []
    let search = searchParam.toLowerCase()
    allProductData.map((element, index) => {
      element.name = element.name.toLowerCase()
      if (element.name.includes(search)) {
        result.push(element)
      }
      else {
        console.log("Nothing found")
      }
    })
    console.log(result)
  }

  const [User, setUser] = useState("")
  const [Password, setPassword] = useState("")
  
  const LoginHandleChange = event => {
    if (event.target.id === "username") {
      setUser(event.target.value)
    }
    if (event.target.id === "password") {
      setPassword(event.target.value)
    }
  }

  const doLogin = event => {
    event.preventDefault()
    console.log("Logging In")
    console.log("User: " + User + " Password: " + Password)
    let encrypted = sha256(User + Password)
  }

  
  return (
    <>
      <div className='App' style={{
        backgroundImage: "url(/fast-food.png)"
        }}>
        <header>
          <Menu className="menu"/>
          <div className='title'>Füber Eats</div>  

          <form onSubmit={onSearch}>
          <input type="text" id="onSearch" onChange={handleChange}></input>
          <input type="submit" />
          </form>

          <form onSubmit={doLogin}>
          <label htmlFor="doLogin">Username: </label>
          <input type="text" id="username" onChange={LoginHandleChange}></input>
          <label htmlFor="doLogin">Password: </label>
          <input type="password" id="password" onChange={LoginHandleChange}></input>
          <input type="submit" />
          </form>

        < Cart className='cart'/>
        </header>
        
        <Delivery />
      </div>
    </>
  );
}


