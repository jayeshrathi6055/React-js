import './App.css';
import Header from "./MyComponent/Header";
import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import React, { useState, useEffect } from 'react';
import AddTodo from "./MyComponent/addTodo";
import About from "./MyComponent/about";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const onDelete = (todo) => {
    //  console.log("I am delete",todo)

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  function addTodo(title, desc) {

    let sno
    if (todos.length === 0) { sno = 0 }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
