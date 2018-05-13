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
        <Header home="Home"/>
          <Home name={"Pankaj"} initalAge={27} >
              <hr/>
              <p>This is paragraph!!</p>
          </Home>
      </div>
    );
  }
}

export default App;
