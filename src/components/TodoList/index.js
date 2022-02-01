import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import FlipMove from 'react-flip-move'
import './styles.css'
import { MdDelete, MdModeEdit } from 'react-icons/md'
const TodoList = () => {
  const {
    todos,
    deleteTodo,
    toggleCompleteTodo,
    completedTodos,
    totalTodos,
    editTodo,
  } = useContext(TodoContext)

  return (
    <>
      {todos.length ? (
        <div className="todos-container">
          <h2>
            {completedTodos} completed of {totalTodos}
          </h2>
          <FlipMove typeName="ul">
            {/* map over the todos array which creates a new li element for every todo */}
            {todos?.map((todo, i) => (
              <div className="todo-text" key={i}>
                <li
                  className={`todo-list ${
                    todo.completed ? 'todo-list--completed' : ''
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
                  <MdModeEdit
                    className="todo-actions-button edit"
                    onClick={() => editTodo(todo)}
                  />
                  <MdDelete
                    className="todo-actions-button delete"
                    onClick={() => deleteTodo(todo.text)}
                  />
                </div>
              </div>
            ))}
          </FlipMove>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default TodoList
