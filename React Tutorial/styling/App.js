import React from 'react';
import './App.css';
import style from './custom.module.css';

export default function App() {
  return (
    <div>
      <h1 className = 'heading'>Type 1 for Css</h1>
      <h1 style = {{color:"white",backgroundColor:"black",padding:'10px'}}>Type 2 for Css</h1>
      <h1 className = {style.heading1}>Type 3 for Css</h1>
    </div>
  )
}
