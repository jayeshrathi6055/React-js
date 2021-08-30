import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  // setState = It is used to change the value of object.
  constructor(){
    super();
    this.state = {
      data : "jay",
      count : 0,
    }
  }
  update(){
    this.setState({data:'Jayesh Rathi'});
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>{this.state.data} + {this.state.count}</h1>
        <button onClick = {()=>{this.update()}}>Click me</button>
      </div>
    );
  }
}

export default App;