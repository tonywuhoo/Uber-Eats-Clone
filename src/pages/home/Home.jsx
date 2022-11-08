import React from "react";
import CardGroup from "../../components/cardGroup/cardGroup.jsx"
import Hero from "../../components/hero/Hero.jsx"
import "./home.css";

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <section className="home-sect2">
        <h2>Lorem ipsum dolor sit.</h2>
        <CardGroup />
      </section>
    </div>
  );
}
