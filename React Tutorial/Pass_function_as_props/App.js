import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import User from "./components/user";

function App() {
  
  function getData(){
    alert('Pass function as props');
  }

  return (
    <div>
      <User data = {getData}></User>
    </div>
  );
}

export default App; 
