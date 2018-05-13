import React, { Component } from 'react';
import { Header } from "../component/Header"
import { Home } from "../component/Home"

class App extends Component {

    greetHello(){
        alert("Hello Pankaj!!")
    }
  render() {
      var user={
          name:"Pankaj",
          age:27,
          hobies:["cricket","music"]
      };
    return (
      <div className="container">
        <Header home="Home"/>
          <Home name={"Pankaj"} initalAge={27} greet={this.greetHello} />
      </div>
    );
  }
}

export default App;
