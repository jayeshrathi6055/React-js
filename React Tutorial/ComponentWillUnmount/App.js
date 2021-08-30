import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Student from "./components/student";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      bool:true,
    }
  }

  render() {
    return (
      <div>
        {console.log('render')}
        {this.state.bool?<h1><Student></Student></h1>:<h1>Deactivate</h1>}
        <button onClick = {()=>{this.setState({bool:!this.state.bool})}}>Click me</button>
      </div>
    );
  }
}

export default App;
