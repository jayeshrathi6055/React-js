import React, { useState, useEffect } from "react";

export default function App() {
  let [data,setData] = useState([])

  // Get API Request
  useEffect(()=>{getApi()},[])

  // function of get API
  function getApi(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then((response)=>response.json()).then((result)=>{
      setData(result);
    })
  }

  // Delete Request
function deleteApi(id){
  let params = {method:'delete'};
  fetch('https://jsonplaceholder.typicode.com/todos/'+id,params).then((response)=>response.json()).then((res)=>{
  console.log('Deletion Successful');
  console.log(res);
  getApi();
  })
}

  return (
    <div>
      <h1>Get API</h1>
      <table border = "1">
        <thead>
          <tr>
            <td>id</td>
            <td>userId</td>
            <td>title</td>
            <td>completed</td>
            <td>operations</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((element,index)=>
              <tr key = {index}>
                <td>{element.id}</td>
                <td>{element.userId}</td>
                <td>{element.title}</td>
                <td>{element.completed?"True":"False"}</td>
                <td><button onClick = {()=>{deleteApi(element.id)}}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );

}
