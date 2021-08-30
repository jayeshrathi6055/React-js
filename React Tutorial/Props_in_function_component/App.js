import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import ComponentProps from "./components/componentProps";

function App() {
  let [name,setname] = useState('jay');
  
  function update(){
    setname('Jayesh Rathi');
  }
  return (
    <div>
      <ComponentProps name = {name}></ComponentProps>  {/* Here we pass variable and its value. */}
      <button onClick={update}>Click Me</button>
    </div>
  );
}

export default App;
