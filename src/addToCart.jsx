// import axios from "axios"
// import Cookies from "js-cookie"
// import { useEffect } from "react";

// export const addtoCart = async (event) => {
//   fetch("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"))
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data.cartItemsByID)
//   })
  
//   console.log("Adding to cart...", event)

//   axios.put("https://fubereats-backend-production.up.railway.app/users/" + Cookies.get("UserID"), {
//   cartItemsByID: [[...cartItemsByID ,event]]
//   })
//   .then(response => {
//   console.log(response.data)
//   })
// }