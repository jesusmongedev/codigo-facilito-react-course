import React from "react";

const TodoList = ({ todos, setTodos }) => {
  // handle Delete Todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  // handle Edit Todo
  const editTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    const TODOTOEDIT = newTodos[todoIndex].text;
    function requiredValue() {
      newTodos[todoIndex].text = prompt("Edite su todo: ", TODOTOEDIT);
      if (newTodos[todoIndex].text === "") {
        requiredValue();
      }
    }
    requiredValue();
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Your Todo list:</h2>
      {todos.map((todo, index) => (
        <ul key={index}>
          <li>{todo.text}</li>
          <button onClick={() => deleteTodo(todo.text)}>❌</button>
          <button onClick={() => editTodo(todo.text)}>🔁</button>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
