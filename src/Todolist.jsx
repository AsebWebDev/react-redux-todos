import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from 'react-redux';

class Todolist extends Component {

  render() {
    let todos = this.state.todos.map((task, index) => (
      <Todo task={task} key={index} />
    ));

    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default connect()(Todolist)