import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Header } from "../component/Header"
import { Home } from "../component/Home"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
