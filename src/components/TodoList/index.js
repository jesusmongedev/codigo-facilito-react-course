import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./styles.css";

const TodoList = () => {
  const { todos, addTodo, deleteTodo, completedTodos, totalTodos } =
    useContext(TodoContext);
  // // handle Delete Todo
  // const deleteTodo = (text) => {
  //   const todoIndex = todos.findIndex((todo) => todo.text === text);
  //   const newTodos = [...todos];
  //   newTodos.splice(todoIndex, 1);
  //   setTodos(newTodos);
  // };
  // // handle Edit Todo
  // const editTodo = (todo) => {
  //   setIsEditing(true);
  //   setCurrentTodo({ ...todo });
  // };
  // handle completed todo
  const handleCompletedTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
  };
  //   // Negando si newTodos[todoIndex].completed = true lo hace falso y si es false lo hace true
  //   newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  //   setTodos(newTodos);
  // };
  // Numero de Todos completados
  // const completedTodos = todos.filter((todo) => todo.completed).length;
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
                onClick={() => handleCompletedTodo(todo.id)}
                defaultChecked={todo.completed}
              />
              {todo.text}
            </li>
            <div className="todo-actions">
              <span onClick={() => deleteTodo(todo.text)}>❌</span>{" "}
              {/* <span onClick={() => editTodo(todo)}>🔁</span> */}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
