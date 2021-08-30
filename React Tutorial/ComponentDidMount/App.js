import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:"jay",
    }
  }

  componentDidMount(){ // It  is invoked immediately after a component is mounted(loaded).
    console.log('ComponentDidMount');
  }

  render() {
    return (
      <div>
        {console.log('render')}
        <h1>My name is {this.state.name}</h1>
        <button onClick = {()=>{this.setState({name:'Jayesh Rathi'})}}>Click me</button>
      </div>
    );
  }
}

export default App;
