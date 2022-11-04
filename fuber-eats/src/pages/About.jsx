import React from "react";
import Akeel from '../images/Akeel.jpeg';
import Chelsea from '../images/Chelsea.jpeg';
import Khris from '../images/Khris.jpeg';
import Nichole from '../images/Nichole.png';
import Tony from '../images/Tony.png';

export default function About() {

  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <div className="about-card">
        <img src={Akeel} alt="Akeel" className="about-image" />
        <h1 className="about-title">Mohamed Akeel Khan</h1>
        <h1 className="about-title">Lorem ipsum</h1>
      </div>

      <div className="about-card">
        <img src={Chelsea} alt="Chelsea" className="about-image" />
        <h1 className="about-title">Chelsea Douglas</h1>
        <h1 className="about-title">Lorem ipsum</h1>
      </div>

      <div className="about-card">
        <img src={Khris} alt="Khris" className="about-image" />
        <h1 className="about-title">Khristopher Patrick</h1>
        <h1 className="about-title">Lorem ipsum</h1>
      </div>

      <div className="about-card">
        <img src={Nichole} alt="Nichole" className="about-image" />
        <h1 className="about-title">Nichole De La Rosa</h1>
        <h1 className="about-title">Lorem ipsum</h1>
      </div>

      <div className="about-card">
        <img src={Tony} alt="Tony" className="about-image" />
        <h1 className="about-title">Tony Wu</h1>
        <h1 className="about-title">Lorem ipsum</h1>
      </div>

    </div>
  )
 }