import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Beers from "./components/Beers"
import RandomBeer from "./components/Random-beer"
import NewBeer from "./components/New-beer"
import Main from "./components/Main"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/all-beers" component={Beers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/>
        </Switch>
          
      </div>
    );
  }
}

export default App;
