import { createContext } from "react";
import useRandomQuote from "../../CustomHooks/useRandomQuote";

// React Hook useContext es un objeto con dos propiedades {Provide, Consumer}
const TodoContext = createContext("null");

function TodoProvider(props) {
  // Llamamos a nuestro customHook useLocalStorage con sus 2 valores inciales
  const { quote, author } = useRandomQuote();

  // const completedTodos = todos.filter((todo) => todo.completed).length;
  // const totalTodos = todos.length;

  // // Funcion para Agregar nuevos Todos
  // const addTodo = (text) => {
  //   if (text !== "") {
  //     const CAPITALISED_TODO = text.toUpperCase();
  //     const newTodos = [...todos];
  //     // .push Agregar un nuevo Todo al final de nustro Array
  //     newTodos.push({
  //       id: todos.length + 1,
  //       completed: false,
  //       text: CAPITALISED_TODO,
  //     });
  //     saveTodos(newTodos);
  //   }
  // };

  // // Funcion para Eliminar Todos
  // const deleteTodo = (text) => {
  //   const todoIndex = todos.findIndex((todo) => todo.text === text);
  //   const newTodos = [...todos];
  //   newTodos.splice(todoIndex, 1);
  //   saveTodos(newTodos);

  //   //* Solución Permitiendo al usuario desmarque un Todo como no completado
  //   const toggleCompleteTodo = (text) => {
  //     const todoIndex = todos.findIndex((todo) => todo.text === text);
  //     const newTodos = [...todos];
  //     // Negando si newTodos[todoIndex].completed = true lo hace falso y si es false lo hace true
  //     newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  //     saveTodos(newTodos);
  //   };

  return (
    <TodoContext.Provider
      value={{
        quote,
        author,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
