import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <div>

      <Router>
        <div>
          <h1>This is navbar</h1>
          {/* <a href="/about">About</a>{'  '}     ------> Don't use <anchor tag> 
          <a href="/">Home</a> */}

          <Link to="/">Home</Link> {"  "}  {/* -------------> Use <Link tag> in HTML*/}
          <Link to="/about">About</Link>
          
          <Switch>
            <Route path={"/"} exact>
              <h1>This is home page</h1>
            </Route>
            <Route path={"/about"} exact>
              <h1>This is about page</h1>
            </Route>
            <Route path={"/login"} exact>
              <h1>This is login page</h1>
            </Route>
            <Route path={"/signup"} exact>
              <h1>This is signup page</h1>
            </Route>
            <Route path={"/contact"} exact>
              <h1>This is contact page</h1>
            </Route>
            <Route path={"/test"} exact>
              <h1>This is Test page</h1>
            </Route>
            <Route path={"/404"} exact>
              <h1>Page not found</h1>
            </Route>
            <Route path={"/**"} exact>
              <Redirect to={"404"} />
            </Route>
          </Switch>
          <h1>This is footer</h1>
        </div>
      </Router>

    </div>
  );
}
