import React from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Learn Reactjs",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Build and develop a project",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Upload the project on github",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  render() {
    return (
      <>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.deleteTodo}
        />
      </>
    );
  }
}

export default TodoContainer;
