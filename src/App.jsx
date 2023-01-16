import TodosContextProvider from './store/todos-context';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <TodosContextProvider>
      <section className="container mx-auto mt-36 flex flex-wrap flex-col justify-center content-center">
        <h1 className="text-3xl font-bold text-center ">TODO</h1>
        <NewTodo></NewTodo>
        <Todos></Todos>
      </section>
    </TodosContextProvider>
  );
}

export default App;
