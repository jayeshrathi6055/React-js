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

  componentDidUpdate(prevProps,prevState){ // It is invoked immediately after updating occurs. This method is not called for the initial render. It takes three arguments componentDidUpdate(prevProps, prevState, snapshot).
    // prevProps - It will automatically save your previous Props.
    // prevState - It will automatically save your previous State.

    // Typical usage (don't forget to compare props and States):
    if(prevState!==(this.state) || prevProps!==(this.props)){
      console.log('ComponentDidUpdate');
      console.log(this.state);
      console.log(prevState);
      console.log(prevProps);
    }
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
