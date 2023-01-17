import React, { useState } from 'react';

export const TodosContext = React.createContext({
  items: [],
  addTodo: () => [],
  removeTodo: (id) => {},
});

function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const addTodoHandler = (todoText) => {
    const newTodo = {
      id: new Date().toISOString(),
      text: todoText,
    };

    if (todos.length === 8) {
      alert('НУ ВСЕ ХВАТИТ');
      return;
    }

    setTodos((prev) => prev.concat(newTodo));
    setIsAdded((prev) => !prev);
    console.log(isAdded);
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const replaceDnDTodoHandler = (currentIndex, dropIndex, currentTodoEl) => {
    setTodos((prev) => {
      prev.splice(currentIndex, 1);
      prev.splice(dropIndex, 0, currentTodoEl);
      return prev;
    });
  };

  const contextValue = {
    items: todos,
    boxIsAdded: isAdded,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    replaceDnDTodo: replaceDnDTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
