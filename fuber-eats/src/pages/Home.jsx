import React from 'react'
import { Link } from "react-router-dom"


export default function Home() {
  return (
    <div className='home'>
      <div className="address">
      <input className='input' type="text"
        name="Address"
      placeholder='Enter address here'/>
      <button><Link to="/delivery">Deliver</Link></button>
      </div>
    </div>
  )
}
