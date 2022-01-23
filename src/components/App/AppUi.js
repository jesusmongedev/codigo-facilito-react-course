import { useContext } from 'react'
import AddTodoForm from '../AddTodoForm/index'
import EditTodoForm from '../EditTodoForm'
import Header from '../Header/index'
import { TodoContext } from '../TodoContext'
import TodoList from '../TodoList'
import './styles.css'

const App = () => {
  const {
    isEditing,
    setIsEditing,
    currentTodo,
    setCurrentTodo,
    handleUpdateTodo,
  } = useContext(TodoContext)

  return (
    <main>
      <Header />
      {/* We need to conditionally render different inputs based on if we are in editing mode */}

      <div className="todo-container">
        {isEditing ? (
          <EditTodoForm
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            setIsEditing={setIsEditing}
            onUpdateTodo={handleUpdateTodo}
          />
        ) : (
          <AddTodoForm />
        )}
        <TodoList />
      </div>
    </main>
  )
}

export default App
