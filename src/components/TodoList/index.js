import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
// import FlipMove from 'react-flip-move'
import './styles.css'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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
    <div className="todos-container">
      <DragDropContext
        onDragEnd={(...props) => {
          console.log(props)
        }}
      >
        <h2>
          {completedTodos} completed of {totalTodos}
        </h2>
        {/* map over the todos array which creates a new li element for every todo */}
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              // typeName="ul"
            >
              {todos.map((todo, i) => (
                <Draggable key={i} draggableId={'draggable-' + i} index={i}>
                  {(provided, snapshot) => (
                    <div
                      className="todo-text"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <li
                        className={`todo-list ${
                          todo.completed ? 'todo-list--completed' : ''
                        }`}
                      >
                        <span {...provided.dragHandleProps}>🐲</span>
                        <input
                          type="checkbox"
                          onClick={() => toggleCompleteTodo(todo.text)}
                          defaultChecked={todo.completed}
                        />
                        {todo.text}
                      </li>
                      <div className="todo-actions">
                        <MdModeEdit
                          className="todo-actions-button"
                          onClick={() => editTodo(todo)}
                        />
                        <MdDelete
                          className="todo-actions-button"
                          onClick={() => deleteTodo(todo.text)}
                        />{' '}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TodoList
