import { useEffect, useState } from "react";
import TodoList from "../TodoList";

const AddTodoForm = () => {
  // Array of Todos, by default is going to be empty
  const [todos, setTodos] = useState(() => {
    // get the TODOS from localStorage
    const savedTodos = localStorage.getItem("TODOS");
    // if there are TODOS stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
    } else {
      // return an empty array
      return [];
    }
  });
  // need state to keep track of the value in the input
  const [inputValue, setInputValue] = useState("");
  // boolean state to know if we are editing (this will let us display
  // different inputs based on a condition (conditional rendering)
  const [isEditing, setIsEditing] = useState(false);
  // object state to set so we know which todo item we are editing
  const [currentTodo, setCurrentTodo] = useState({});

  // useEffect to run once the component mounts
  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    localStorage.setItem("TODOS", JSON.stringify(todos));
    // add the todos as a dependancy because we want to update
    // localstorage anytime the todos state changes
  }, [todos]);

  // function to get the value of the input and set the new state
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // function to create a new object on form submit
  const handleAddTodo = (e) => {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    // don't submit if the input is an empty string
    if (inputValue !== "") {
      const CAPITALISED_TODO = inputValue.toUpperCase();
      const newTodos = [...todos];
      // .push Agregar un nuevo Todo al final de nustro Array
      newTodos.push({
        id: todos.length + 1,
        completed: false,
        text: CAPITALISED_TODO,
      });
      setTodos(newTodos);
    }
    setInputValue("");
  };

  // function to get the value of the edit input and set the new state
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value.toUpperCase() });
    console.log(currentTodo);
  };

  // function to edit a todo item
  const handleUpdateTodo = (id, updatedTodo) => {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    setIsEditing(false);
    // update the todos state with the updated todo
    setTodos(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // call the handleUpdateTodo Function - passing the currentTodo.id and the currentTodo object as arguments
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <div>
      {/* We need to conditionally render different inputs based on if we are in editing mode */}
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit todo</h2>
          <label htmlFor="editTodo">Edit todo:</label>
          <input
            type="text"
            name="editTodo"
            id="editTodo"
            placeholder="Edit todo..."
            value={currentTodo.text}
            onChange={handleEditInputChange}
            autoFocus
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <form>
          <label htmlFor="todos">New Todo:</label>
          <input
            type="text"
            name="todos"
            id="todo"
            placeholder="What needs to be done ...?"
            value={inputValue}
            onChange={handleChange}
            autoFocus
          />
          <button type="submit" onClick={handleAddTodo}>
            Add
          </button>
        </form>
      )}

      <TodoList
        todos={todos}
        setTodos={setTodos}
        setIsEditing={setIsEditing}
        setCurrentTodo={setCurrentTodo}
      />
    </div>
  );
};

export default AddTodoForm;
