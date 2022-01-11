import React from "react";

const TodoList = ({ todos, setTodos, setIsEditing, setCurrentTodo }) => {
  // handle Delete Todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  // handle Edit Todo
  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  return (
    <div>
      <h2>Your Todo list:</h2>
      {/* map over the todos array which creates a new li element for every todo */}
      {todos.map((todo, index) => (
        <ul key={index}>
          <li>
            {todo.text}{" "}
            <button onClick={() => deleteTodo(todo.text)}>❌</button>{" "}
            <button onClick={() => editTodo(todo)}>🔁</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
