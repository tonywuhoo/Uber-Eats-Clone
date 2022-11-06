import React from 'react'
import { Link } from "react-router-dom"



export default function Home(props) {

  const handleChange = event => {
    props.setAddress(event.target.value)

  }
  const submitAddress = event => {
    console.log("Clicked")
  }
  return (
    <div className='home'style={{backgroundImage: "url(/fast-food.png)"}}>
    <div className='hungry'>Get Food Now!</div>
    <div className="address">
    <input className='input' type="text" onChange= { handleChange } name="Address" placeholder='Enter address here'/>
    <button onClick = { submitAddress }><Link to="/Product">Delivery</Link></button>
    </div>
    </div>
  )
}
