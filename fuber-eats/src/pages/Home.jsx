import React from 'react'
import { Link } from "react-router-dom"



export default function Home() {
  return (
    <div className='home'>
      <div className="skillet"style={{ backgroundImage: "url(/fast-food.png)" }}>
      <div className='hungry'>Get Food Now!</div>
      <div className="address">
      <input className='input' type="text"
        name="Address"
      placeholder='Enter address here'/>
          <button><Link to="/delivery">Find Food</Link></button>
          </div>
      </div>
    </div>
  )
}
