import React, { useContext, useState } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './modules/Todos.module.css';

function Todos() {
  const todoCtx = useContext(TodosContext);
  const [currentTodoEl, setCurrentTodoEl] = useState(null);

  function dragStartHandler(e, item) {
    setCurrentTodoEl(item);
  }

  function dragLeaveHandler(e) {
    e.target.style.background = '#f7f5ef';
  }

  function dragEndHandler(e) {
    e.target.style.background = '#f7f5ef';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }

  function dropHandler(e, item) {
    e.preventDefault();
    const currentIndex = todoCtx.items.indexOf(currentTodoEl);
    const dropIndex = todoCtx.items.indexOf(item);

    todoCtx.replaceDnDTodo(currentIndex, dropIndex, currentTodoEl);

    setCurrentTodoEl(null);

    e.target.style.background = '#f7f5ef';
  }

  return (
    <div>
      <ul className={classes.todos}>
        {todoCtx.items.map((item, i) => (
          <li
            key={item.id}
            draggable={true}
            onDragStart={(e) => {
              dragStartHandler(e, item);
            }}
            onDragLeave={(e) => {
              dragLeaveHandler(e);
            }}
            onDragEnd={(e) => {
              dragEndHandler(e);
            }}
            onDragOver={(e) => {
              dragOverHandler(e);
            }}
            onDrop={(e) => {
              dropHandler(e, item);
            }}
          >
            <TodoItem
              index={i + 1}
              text={item.text}
              onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
            ></TodoItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
