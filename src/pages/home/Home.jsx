import React from "react";
import CardGroup from "../../components/cardGroup/cardGroup.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Map from "../../components/map/Map.jsx";
import "./home.css";

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <CardGroup />
      <Map />
    </div>
  );
}
