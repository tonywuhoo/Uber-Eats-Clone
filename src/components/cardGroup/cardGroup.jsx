import React from "react";
import "./cardGroup.css";
import { Link } from "react-router-dom";

export default function cardGroup() {
  return (
    <section className="home-sect2">
      <h2>Take the next steps.</h2>
      <div class="card-group">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/800"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Register for buisness account</h5>
            <p class="card-text">Interested in adding your resturant to our app?</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><Link to="/">Register Now</Link></small>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/800"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/800"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </section>
  );
}
