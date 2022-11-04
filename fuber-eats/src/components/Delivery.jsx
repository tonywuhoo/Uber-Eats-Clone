import React from "react"
import { FaMapPin } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Food from '../Food.js'


export default function Delivery() {
  let navigate = useNavigate();
  
  const pageChange = ()=>{
    navigate(Food);
  }
  
  return (
   
    <div>
      <p>Get food now!</p>
      <form id="form">
        <p>
         <FaMapPin className="pin"/>
        <input className="delivery" type="text"
            placeholder="Enter delivery address" />
          <button onClick={pageChange}>Find Food</button>
        </p>  
      </form>
      
    </div>
    
  )
}