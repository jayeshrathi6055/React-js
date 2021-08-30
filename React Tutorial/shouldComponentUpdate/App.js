import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count:0,
    }
  }

  shouldComponentUpdate(){ // It is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render.
    // It takes 2 arguments shouldComponentUpdate(nextProps, nextState)
    // It will block rendering if it return false.
    if(this.state.count < 10){
      console.log('shouldComponentUpdate',this.state.count);
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        {console.log('render')}
        <h1>My name is {this.state.count}</h1>
        <button onClick = {()=>{this.setState({count:this.state.count + 1})}}>Click me</button>
      </div>
    );
  }
}

export default App;
