import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact>
        <Home />
        </Route>
        <Route path = "/about" exact>
        <Home />
        </Route>
      </Switch>
    </Router>
  )
}
