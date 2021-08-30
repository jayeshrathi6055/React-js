import React, { useState, useEffect } from "react";

export default function App() {
  let [data,setData] = useState([])
  let [title,setTitle] = useState('');
  let [completed,setCompleted] = useState('');
  let [id,setId] = useState(null);

  // Get API Request
  useEffect(()=>{getApi()},[])

  // function of get API
  function getApi(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then((response)=>response.json()).then((result)=>{
      setData(result);
    })
  }

  // Update 
function updateApi(id){
  let item = data[id-1];
  setTitle(item.title);
  setCompleted(item.completed);
  setId(id);
}

// Put Request
function putApi(){
  let item = {id,title,completed};
  console.log(item);
  let params = {
    'method':'PUT',
    'headers':{
      'Accept':'application/json',
    'Content-Type':'application/json',
    },
    'body':JSON.stringify(item),
  }
  fetch('https://jsonplaceholder.typicode.com/todos/',params).then((response)=>response.json()).then((res)=>{
    console.log(res);
    console.log('Update successful');
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
                <td><button onClick = {()=>{updateApi(element.id)}}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <input type="text" defaultValue = {title} onChange = {(e)=>setTitle(e.target.value)} style = {{margin:'20px'}} />
      <input type="text" defaultValue = {completed} onChange = {(e)=>setCompleted(e.target.value)} />
      <button onClick = {putApi}>Save</button>
    </div>
  );

}
