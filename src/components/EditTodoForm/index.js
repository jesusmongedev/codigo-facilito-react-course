const EditTodoForm = ({
  currentTodo,
  setCurrentTodo,
  setIsEditing,
  onUpdateTodo,
}) => {
  const onEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value.toUpperCase() })
  }
  const onEditFormSubmit = (e) => {
    e.preventDefault()
    onUpdateTodo(currentTodo.id, currentTodo)
  }
  return (
    <div>
      <form onSubmit={onEditFormSubmit}>
        <h1>Edit todo</h1>
        <label htmlFor="editTodo">Edit todo:</label>
        <input
          name="editTodo"
          type="text"
          placeholder="Edit todo..."
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button type="submit">Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default EditTodoForm
