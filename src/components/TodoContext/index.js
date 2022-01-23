import { createContext, useState } from 'react'
import { useLocalStorage } from '../../CustomHooks/useLocalStorage'
import useRandomQuote from '../../CustomHooks/useRandomQuote'

// React Hook useContext es un objeto con dos propiedades {Provide, Consumer}
const TodoContext = createContext('null')

function TodoProvider(props) {
  // Llamamos a nuestro customHook useLocalStorage con sus 2 valores inciales
  const { quote, author } = useRandomQuote()
  const { item: todos, saveItem: saveTodos } = useLocalStorage('TODOS_V2', [])
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState('')

  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  // Funcion para Agregar nuevos Todos
  const addTodo = (text) => {
    if (text !== '') {
      const CAPITALISED_TODO = text.toUpperCase()
      const newTodos = [...todos]
      // .push Agregar un nuevo Todo al final de nustro Array
      newTodos.push({
        id: todos.length + 1,
        completed: false,
        text: CAPITALISED_TODO,
      })
      saveTodos(newTodos)
    }
  }

  // Funcion para Eliminar Todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  //* Solución Permitiendo al usuario desmarque un Todo como no completado
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    // Negando si newTodos[todoIndex].completed = true lo hace falso y si es false lo hace true
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  // Open and close EditTodoForm
  const editTodo = (todo) => {
    setIsEditing(true)
    setCurrentTodo({ ...todo })
  }

  // function to edit a todo item
  const handleUpdateTodo = (id, updatedTodo) => {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo
    })
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    setIsEditing(false)
    // update the todos state with the updated todo
    saveTodos(updatedItem)
  }

  return (
    <TodoContext.Provider
      value={{
        quote,
        author,
        todos,
        saveTodos,
        completedTodos,
        totalTodos,
        addTodo,
        deleteTodo,
        toggleCompleteTodo,
        currentTodo,
        setCurrentTodo,
        isEditing,
        setIsEditing,
        editTodo,
        handleUpdateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
