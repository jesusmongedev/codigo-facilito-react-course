import { useContext } from "react";
import EditTodoForm from "../EditTodoForm/index";
import AddTodoForm from "../AddTodoForm/index";
import TodoList from "../TodoList";
import { TodoContext } from "../TodoContext";

const AppUi = () => {
  // Manera mas optima de llamar mis estados del value creado en TodoContext
  const { error, loading, deleteTodo, toggleCompleteTodo, totalTodos, todos } =
    useContext(TodoContext);

  return (
    <main>
      {/* We need to conditionally render different inputs based on if we are in editing mode */}
      {isEditing ? (
        <EditTodoForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={inputValue}
          onAddInputChange={handleChange}
          onAddFormSubmit={handleAddTodo}
        />
      )}

      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onComplete={toggleCompleteTodo(todo.text)}
          onDelete={deleteTodo(todo.text)}
          //   setIsEditing={setIsEditing}
          //   setCurrentTodo={setCurrentTodo}
        />
      ))}
    </main>
  );
};

export default AppUi;
