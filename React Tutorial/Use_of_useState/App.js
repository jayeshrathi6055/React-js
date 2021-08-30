import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // useState = It is use to rerender the page if variable is changed.
  const [data, setData] = useState("Jay");  // data - currentData and setData - use to change data
  function update(){
    setData('Jayesh Rathi');
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={update}>Click Me</button>
    </div>
  );
}

export default App;