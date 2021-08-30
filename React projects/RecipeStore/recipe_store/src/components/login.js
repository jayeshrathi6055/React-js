import React from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  let [email,setEmail] = React.useState('');
  let [password,setPassword] = React.useState('');
  let history = useHistory();
  let emailRef = React.useRef();
  let passwordRef = React.useRef();

function formSubmit(e){
    e.preventDefault();
    if(email!=='' && password!==''){
      let url = 'http://localhost:8000/login';
      let data = {email,password};
      let params = {
        method:'post',
        headers: { 'content-type': 'application/json' },
        body:JSON.stringify(data),
      }
      fetch(url, params).then(response => response.json()).then((data)=>{
        localStorage.setItem("email",email);
        localStorage.setItem("name",data.user.fullName);
        localStorage.setItem("id",data.user._id);
        localStorage.setItem("token",data.token);
        history.push('/loggedIn');
      }).catch(()=>{
        emailRef.current.value = "";
        passwordRef.current.value = "";
      })
    }
}

  return (
    <div>  
      <div className="signup login">
        <div>
          <p className="upper">Recipe Store</p>
          <h2>Log In</h2>
          <form action="post">
            <input type="email" placeholder="Enter your Email" onChange = {(e)=>setEmail(e.target.value)} ref = {emailRef}/>
            <input type="password" placeholder="Enter your Password" onChange = {(e)=>setPassword(e.target.value)} ref = {passwordRef}/>
            <button type="submit" onClick = {(e)=>formSubmit(e)}>Submit</button>
          </form>
          <p className="lower">
            Click here to <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
