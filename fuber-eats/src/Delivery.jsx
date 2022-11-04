import React from "react"

export default function Delivery() {

  return (
    <div>
      <form id="form">
      <p>
        <input className="delivery" type="text"
               name="lot"
            placeholder="Enter delivery address" />
          <button>Find Food</button>
        </p>  
      </form>
      
    </div>
  )
}