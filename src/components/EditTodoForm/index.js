import React from "react";

const EditTodoForm = ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onEditFormSubmit}>
        <h2>Edit todo</h2>
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
  );
};

export default EditTodoForm;
