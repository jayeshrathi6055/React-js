import React, { useState, useEffect } from "react";

export default function App() {
 let [title,setTitle] = useState("");
 let [body, setBody] = useState("");

//  Post Request
function saveUser(){
  let data = {userId:10,title:title,body:body}
  let params = {
    method:'post',
    headers:{ 'content-type': 'application/json' },
    body:JSON.stringify(data),
  }
  fetch('https://jsonplaceholder.typicode.com/posts/',params).then((response)=>response.json()).then((res)=>{
    console.log(res);
    console.log('Your response is recorded');
  })
}

  return (
    <div>
      <h1>Post API</h1>
      <input type="text" onChange = {(e)=>{setTitle(e.target.value)}}/><br /><br />
      <input type="text" onChange = {(e)=>{setBody(e.target.value)}} /><br /><br />
      <button onClick = {saveUser}>Save</button>
    </div>
  );

}
