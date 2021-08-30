import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import ComponentClassProps from './components/componentClassProps';

function App() {
  let [name,setname] = useState('jay');
  
  function update(){ 
    setname('Jayesh Rathi');
  }
  return (
    <div>
      <ComponentClassProps name = {name} email = "jay@email.com"></ComponentClassProps>  {/* Here we pass variable and its value. */}
      <button onClick={update}>Click Me</button>
    </div>
  );
}

export default App; 
