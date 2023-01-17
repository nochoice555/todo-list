import TodosContextProvider from './store/todos-context';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import BackGround from './components/BackGround';

function App() {
  return (
    <TodosContextProvider>
      <div className="container relative h-screen w-screen">
        <BackGround />
        <section className="absolute h-screen w-screen flex flex-col justify-center content-center">
          <h1 className="text-3xl font-bold text-center ">TODO</h1>
          <NewTodo></NewTodo>
          <Todos></Todos>
        </section>
      </div>
    </TodosContextProvider>
  );
}

export default App;
