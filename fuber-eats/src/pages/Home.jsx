import React from 'react'
import { Link } from "react-router-dom"


export default function Home() {
  return (
    <div className='home'>
      HOME
      <button><Link to="/delivery">Deliver</Link></button>

    </div>
  )
}
