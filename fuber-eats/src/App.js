import Menu from "./Menu.jsx"
import Delivery from './Delivery.jsx';
import Cart from "./Cart.jsx";
import './App.css';
import { useState } from "react"
import allProductData from "./allProductData.js";

export default function Home() {

  // Search Logic
  // const [searchParam, setsearchParams] = useState("")
  // const onSearch = event => {
  //   event.preventDefault()
  //   let AlphabetSearch = searchParam.split("").sort()
  //   console.log("Searching " + searchParam)
  //   let storedID = []
  //   if (typeof allProductData[0].name === "string") {
  //     allProductData.map((element, index) => {
  //       allProductData[index].name = [[allProductData[index].name], [allProductData[index].name.split("").sort().filter((item) => item != ' ')]]
  //     })
  //   }
  //   allProductData.map((element, index) => {
  //     element.name[1].forEach(eachArray => {
  //       let percent = 0
  //       let counter = 0
  //       for (let i = 0; i < eachArray.length; i++){
  //         for (let j = 0; j < AlphabetSearch.length; j++){
  //           if (eachArray[i] === AlphabetSearch[j]) {
  //             counter++
  //           }
  //         }
  //       }
  //      percent = (counter * 100) / AlphabetSearch.length 
  //       if ((percent >= 100 && percent < 105)) {
  //         storedID.push(element)
  //       }
  //       console.log(Math.floor(percent))
  //     });
  //   })
  //   console.log(AlphabetSearch)
  //   console.log(storedID)

  // }

  // const handleChange = event => {
  //   setsearchParams(event.target.value)
  //   console.log(searchParam)
  // }
  
  return (
    <>
      <div className='App' style={{
        backgroundImage: "url(/fast-food.png)"
        }}>
        <header>
          <Menu className="menu"/>
          <div className='title'>Füber Eats</div>  

          {/* <form onSubmit={onSearch}>
          <input type="text" id="onSearch" onChange={handleChange}></input>
        <input type="submit"/>
          </form> */}

        < Cart className='cart'/>
        </header>
        
        <Delivery />
      </div>
    </>
  );
}


