import React, { Component } from "react";
import '../App.css';


import { Link } from "react-router-dom";

const Main = props => {
  return (
    <div className="container">
      <div className="container border border-light">
        <Link to="/all-beers">
          <figure>
            <img src={"/images/beers.png"} alt="beers image link" />
          </figure>
          <h1>All Beers</h1>
        </Link>
      </div>
      <div className="container border border-light">
        <Link to="/random-beer">
        <figure>
            <img src={"/images/random-beer.png"} alt="random beer link" />
          </figure>
          <h1>Random Beer</h1>
        </Link>
      </div>
      <div className="container border border-light">
        <Link to="/new-beer">
        <figure>
            <img src={"/images/new-beer.png"} alt="new beer image link" />
          </figure>
          <h1>New Beer</h1>
        </Link>
      </div>
    </div>
  );
};

export default Main;
