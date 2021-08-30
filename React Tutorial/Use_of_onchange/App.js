import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";

function App() {
  let [data,setdata] = useState("Type Below - ");
  let [printvalue,setprint] = useState(false);
  function change(e){
    setdata(e.target.value);
  }
  function print(){
    printvalue = !printvalue;
    setprint(printvalue);
  }
  return (
    <div>
      <h1>{data}</h1>
      <input type="text" onChange = {change}/>
      <button onClick = {print}>Print</button>
      <h1>{(printvalue==true)?data:""}</h1>
    </div>
  );
}

export default App; 
