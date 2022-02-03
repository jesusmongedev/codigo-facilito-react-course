import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './styles.css'

const AddTodoForm = () => {
  const { addTodo } = useContext(TodoContext)
  // need state to keep track of the value in the input
  const [inputValue, setInputValue] = useState('')

  // function to get the value of the input and set the new state
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  // function to add a new Todo
  const onAddFormSubmit = (e) => {
    e.preventDefault()
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <form>
      <h1>ToDo App</h1>
      <label htmlFor="todo">New Todo: </label>
      <input
        id="todo"
        type="text"
        placeholder="What needs to be done ...?"
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
      <button type="submit" onClick={onAddFormSubmit}>
        Add
      </button>
    </form>
  )
}

export default AddTodoForm
