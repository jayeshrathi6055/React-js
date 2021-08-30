import React from "react";
import User from "./components/user";

export default function App() {

  // Get data from child to parent
  function getName(data){
    console.log(data);
    alert(data.name);
    
  }

  function getSkill(data){
    console.log(data.obj);
    alert(data.obj.skill);
  }
  
  return (
    <div>
      <User data = {getName} data1 = {getSkill}></User>
    </div>
  );
}
