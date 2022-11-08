import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./hero.css"

export default function hero() {
  return (
    <div className="hero-ctr container-fluid">
      <div className="home-box container-fluid">
        <div className="display-4 hungry">Get food Now!</div>
        <p>Get 50% off your next order when you enter BOGOSLFGKF beatae.</p>

        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control address-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter address"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your information with anyone else.
            </small>
          </div>
          <Button size="lg" type="submit" class="btn btn-primary">
            <Link to="/Products" className="text-light">
              Deliver
            </Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
