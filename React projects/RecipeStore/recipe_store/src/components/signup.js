import React from "react";
import "./signup.css";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

function submitForm(e){
  e.preventDefault();
  if(name!=='' && email!=='' && password!==''){
    let url = 'http://localhost:8000/signup';
    let fullName = name;
    let data = {fullName,email,password};
    let params = {
      method:'post',
      headers: { 'content-type': 'application/json' },
      body:JSON.stringify(data),
    }
    fetch(url, params).then(response => response.json()).then((item)=>{
      localStorage.setItem("email",item.user.email);
      localStorage.setItem("id",item.user._id);
      localStorage.setItem("token",item.token);
      localStorage.setItem('name',fullName);
      history.push('/loggedIn');
    });
  }
}

  return (
    <div>
      <div className="signup">
        <div>
          <p className="upper">Recipe Store</p>
          <h2>Sign Up</h2>
          <form action="post">
            <input type="text" placeholder="Enter your Full Name" onChange = {(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter your Email" onChange = {(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your Password" onChange = {(e)=>setPassword(e.target.value)} />
            <button type="submit" onClick = {(e)=>submitForm(e)}>Submit</button>
          </form>
          <p className="lower">
            Click here for <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
