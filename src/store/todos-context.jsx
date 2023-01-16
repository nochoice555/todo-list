import React, { useState } from 'react';

export const TodosContext = React.createContext({
  items: [],
  addTodo: () => [],
  removeTodo: (id) => {},
});

function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    const newTodo = {
      id: new Date().toISOString(),
      text: todoText,
    };

    setTodos((prev) => prev.concat(newTodo));
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
