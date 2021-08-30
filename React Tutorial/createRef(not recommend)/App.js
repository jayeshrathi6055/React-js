import React, { createRef } from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();  // It is used to manipulate DOM directly. But it is not recommended to use. Because due to this our react app become slow. 
  }

  getVal() {
    // It will give whole object
    console.log(this.inputRef);
    // It gives you value of input
    console.log(this.inputRef.current.value);
    // Styling
    this.inputRef.current.style.backgroundColor = "black";
    this.inputRef.current.style.color = "white";
  }

  render() {
    return (
      <div>
        <h1>Use REF Component</h1>
        {/* Don't forget to write attribute ref where you want to manipulate */}
        <input type="text" ref={this.inputRef} />{"  "}

        <button onClick={() => this.getVal()}>Click Me</button>{"  "}

        <button onClick={this.getVal}>Click Me 2</button> {/* Don't use function directly in Ref because it gives an error */}
      </div>
    );
  }
}
