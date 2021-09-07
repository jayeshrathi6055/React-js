import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./navbar";

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path = "/">
        <Navbar></Navbar>
      </Route>
      <Route exact path = "/about">
        <Navbar></Navbar>
      </Route>
    </Switch>
</Router>
    </>
  );
}

export default App;
