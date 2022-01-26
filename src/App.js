import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos'
import { Footer } from './MyComponents/Footer'
import { AddTodos } from './MyComponents/AddTodos';
import React, { useState, useEffect } from 'react';
import { About } from './MyComponents/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((a) => {
      return a !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else { sno = todos[todos.length - 1].sno + 1; }
    const myTodo = {
      sno: sno,
      job: title,
      description: desc
    }
    setTodos([...todos, myTodo])
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
