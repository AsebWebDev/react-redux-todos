import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from 'react-redux';
import { ADD_TODO } from "./actioncreators";


class Todolist extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      task: this.state.task
    });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo task={val.task} key={index} />
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task"></label>
          <input type="text" name="task" id="task" onChange={this.handleChange}/>
          <button>Add a todo</button>
        </form>
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