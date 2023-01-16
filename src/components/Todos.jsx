import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './modules/Todos.module.css';

function Todos() {
  const todoCtx = useContext(TodosContext);

  return (
    <div>
      <ul className={classes.todos}>
        {todoCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
