import React from "react"
import { FaMapPin } from 'react-icons/fa';

export default function Delivery() {

  return (
    <div>
      <p>Get food now!</p>
      <form id="form">
        <p>
         <FaMapPin className="pin"/>
        <input className="delivery" type="text"
            placeholder="Enter delivery address" />
          <button>Find Food</button>
        </p>  
      </form>
      
    </div>
  )
}