import { useState } from "react";
import TodoList from "../TodoList";

const defaultTodos = [
  { completed: false, text: "Create my Todo app" },
  { completed: false, text: "Papa Fam" },
  { completed: false, text: "Have dinner" },
];

const AddTodoForm = () => {
  // Array of Todos, by default is going to be empty
  const [todos, setTodos] = useState(defaultTodos);
  // Input Todo Value
  const [inputValue, setInputValue] = useState("");
  // Handle Todo Input onChange
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // Handle Add New Todo
  const handleAddTodo = (e) => {
    // console.log(`This is the inputValue ${inputValue}`);
    e.preventDefault();
    if (inputValue !== "") {
      const CAPITALISED_TODO = inputValue.toUpperCase();
      const newTodos = [...todos];
      // .push Agregar un nuevo Todo al final de nustro Array
      newTodos.push({
        completed: false,
        text: CAPITALISED_TODO,
      });
      setTodos(newTodos);
    }
    setInputValue("");
  };
  return (
    <div>
      <form>
        <label htmlFor="todos">New Todo:</label>
        <input
          type="text"
          name="todos"
          id="todo"
          placeholder="What needs to be done ...?"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default AddTodoForm;
