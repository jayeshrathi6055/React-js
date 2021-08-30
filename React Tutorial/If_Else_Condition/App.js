import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";

function App() {
  let [loggedIn , setLoggedIn] = useState(true); 
  let [user,setUser] = useState(1);
  return (
    <div>
      {/* If Else Condition */}
      {loggedIn?<h1>Welcome User</h1>:<h1>Go to login Page</h1>}

      {/* Nested If Else Condition */}
      {(user==1)?<h1>Welcome User 1</h1>:(user==2)?<h1>Welcome User 2</h1>:<h1>Unknown User</h1>}
    </div>
  );
}

export default App; 
