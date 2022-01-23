import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
// import FlipMove from 'react-flip-move'
import './styles.css'
import { MdDelete, MdModeEdit, MdDragHandle } from 'react-icons/md'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TodoList = () => {
  const {
    todos,
    saveTodos,
    deleteTodo,
    toggleCompleteTodo,
    completedTodos,
    totalTodos,
    editTodo,
  } = useContext(TodoContext)

  return (
    <div className="todos-container">
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index
          const desI = param.destination?.index
          if (desI) {
            todos.splice(desI, 0, todos.splice(srcI, 1)[0])
            saveTodos(todos)
          }
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
                        <span {...provided.dragHandleProps}>
                          <MdDragHandle />
                        </span>
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
