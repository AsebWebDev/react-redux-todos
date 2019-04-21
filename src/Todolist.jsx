import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from 'react-redux';

class Todolist extends Component {

  render() {
    let todos = this.props.todos.map((task, index) => (
      <Todo task={task} key={index} />
    ));

    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos
  }
}

export default connect(mapStateToProps)(Todolist)