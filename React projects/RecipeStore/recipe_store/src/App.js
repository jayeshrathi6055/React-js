import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar";
import BodyPage from "./components/bodyPage";
import Recipes from "./components/recipes";
import Signup from "./components/signup";
import Login from "./components/login";
import LoggedIn from "./components/loggedIn";

function App() {
  let [valid, setValid] = React.useState(false);

  function check(){
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    let data = { email, token };
    let url = "http://localhost:8000/tokenValidation";
    let params = {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(url, params)
      .then((response) => response.json())
      .then((item) => {
        setValid(item.valid);
        return item.valid;
      });
  }

  useEffect(() => {
    check();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          {valid ? (
            <Redirect to={"/loggedIn"} />
          ) : (
            <div>
              <Navbar />
              <BodyPage check = {check} />
            </div>
          )}
        </Route>
        <Route path={"/login"} exact>
          <Login></Login>
        </Route>
        <Route path={"/signup"} exact>
          <Signup></Signup>
        </Route>
        <Route path={"/loggedIn"} exact>
            <LoggedIn check = {check} />
        </Route>
        <Route path={"/recipes"} exact>
            <Recipes />
        </Route>
        <Route path={"/404"} exact>
          <h1>Page not found</h1>
        </Route>
        <Route path={"/**"} exact>
          <Redirect to={"404"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
