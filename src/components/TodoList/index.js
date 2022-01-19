import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./styles.css";

const TodoList = () => {
  const {
    todos,
    deleteTodo,
    toggleCompleteTodo,
    completedTodos,
    totalTodos,
    editTodo,
  } = useContext(TodoContext);

  return (
    <div className="todos-container">
      <h2>
        {completedTodos} completed of {totalTodos}
      </h2>
      {/* map over the todos array which creates a new li element for every todo */}
      <ul>
        {todos.map((todo, index) => (
          <div className="todo-text" key={index}>
            <li
              className={`todo-list ${
                todo.completed ? "todo-list--completed" : ""
              }`}
            >
              <input
                type="checkbox"
                onClick={() => toggleCompleteTodo(todo.text)}
                defaultChecked={todo.completed}
              />
              {todo.text}
            </li>
            <div className="todo-actions">
              <span onClick={() => deleteTodo(todo.text)}>❌</span>{" "}
              <span onClick={() => editTodo(todo)}>🔁</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
