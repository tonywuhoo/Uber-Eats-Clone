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
            <small class="text-muted"><Link to="/">Create Buisness Account</Link></small>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/800"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Start getting your food delivered.</h5>
            <p class="card-text">create an account, lay back, and let the food come to you.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><Link to="/">Create Account</Link></small>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/800"
            alt="Card image cap"
          />
          <div class="card-body">
          <h5 class="card-title">Deliver with fubar</h5>
            <p class="card-text">sign up to deliver with us.</p>
          </div>
          <div class="card-footer">
          <small class="text-muted"><Link to="/">Join Fubar</Link></small>
          </div>
        </div>
      </div>
    </section>
  );
}
