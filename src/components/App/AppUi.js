import { useContext } from 'react'
import AddTodoForm from '../AddTodoForm/index'
import CreateTodo from '../CreateTodo'
import EditTodoForm from '../EditTodoForm'
import Header from '../Header/index'
import LoadingTodo from '../LoadingTodo'
import { TodoContext } from '../TodoContext'
import TodoList from '../TodoList'
import './styles.css'

const App = () => {
  const {
    todos,
    isEditing,
    setIsEditing,
    currentTodo,
    setCurrentTodo,
    handleUpdateTodo,
    loading,
    error,
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
        {/* States: loading, error, Create Todos Screen */}
        {error && <p>Error loading todos...</p>}
        {loading && new Array(3).fill().map((_, i) => <LoadingTodo key={i} />)}
        {!loading && !todos.length && <CreateTodo />}
        {<TodoList />}
      </div>
    </main>
  )
}

export default App
