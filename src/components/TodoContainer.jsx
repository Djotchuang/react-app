import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn Reactjs",
        completed: true,
      },
      {
        id: 2,
        title: "Build and develop a project",
        completed: false,
      },
      {
        id: 3,
        title: "Upload the project on github",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <>
        <Header />
        <TodosList todos={this.state.todos} />
      </>
    );
  }
}

export default TodoContainer;
