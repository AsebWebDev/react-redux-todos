import React, { Component } from "react";
import TodoList from "./Todolist";
import {Link, Route, Redirect } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See our Todos!</h1>
        <p><Link to="/todos">See my Todos</Link></p>      
        <p><Link to="/todos/new">Add a Todos</Link></p>
        <Route path="/todos" component={TodoList}/>
        <Route exact path="/" render={() => <Redirect to="/todos" />}
          />
      </div>
    );
  }
}

export default App;
