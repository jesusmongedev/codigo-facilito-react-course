import { TodoProvider } from "../TodoContext/index";
import AppUi from "./AppUi";

const App = () => {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
};

export { App };
