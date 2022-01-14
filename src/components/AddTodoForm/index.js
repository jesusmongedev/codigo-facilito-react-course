const AddTodoForm = ({ todo, onAddInputChange, onAddFormSubmit }) => {
  return (
    <form>
      <h1>ToDo App</h1>
      <label htmlFor="todo">New Todo:</label>
      <input
        name="todo"
        type="text"
        placeholder="What needs to be done ...?"
        value={todo}
        onChange={onAddInputChange}
        autoFocus
      />
      <button type="submit" onClick={onAddFormSubmit}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
