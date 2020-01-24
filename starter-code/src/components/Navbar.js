import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Beers = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">NAVBAR</Link>
    </nav>
  );
};

export default Beers;
