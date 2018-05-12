import React, { Component } from 'react';
import { Header } from "../component/Header"
import { Home } from "../component/Home"

class App extends Component {
  render() {
      var user={
          name:"Pankaj",
          age:27,
          hobies:["cricket","music"]
      };
    return (
      <div className="container">
        <Header/>
        <Home user={user} />
      </div>
    );
  }
}

export default App;
