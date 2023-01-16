import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './modules/NewTodo.module.css';

function NewTodo() {
  const todoCtx = useContext(TodosContext);

  const todoInputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredText = todoInputRef.current.value;
    if (enteredText.trim().length === 0) return;

    todoCtx.addTodo(enteredText.trim());
    todoInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Type here:</label>
      <input
        type="text"
        id="text"
        ref={todoInputRef}
        placeholder="NOTHING"
      ></input>
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
