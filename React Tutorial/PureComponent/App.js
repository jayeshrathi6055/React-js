import React from "react";

// export default class App extends React.Component{  // It will rerender unusually so we use Pure Component
export default class App extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  render(){
    return (
      <div>
        {console.log('rendering')}
        <h1>App Component : {this.state.count}</h1>
        <button onClick = {()=>{this.setState({count:1})}}>Click Me</button>
        <button onClick = {()=>{this.setState({count:this.state.count + 1})}}>Update me</button>
      </div>
    );
  }
}
