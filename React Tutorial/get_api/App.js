import React, { useState, useEffect } from "react";

export default function App() {
  let [data,setData] = useState([])

  // Get API Request
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>response.json()).then((result)=>{
      setData([result]);
    })
  },[])

  console.log(data);  // Collecting data

  return (
    <div>
      <h1>Get API</h1>
      <table border = "1">
        <thead>
          <tr>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((element,index)=>
              <tr key = {index}>
                <td>{element.userId}</td>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.completed?"True":"False"}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );

}
