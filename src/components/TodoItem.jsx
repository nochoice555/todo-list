import React from 'react';
import classes from './modules/TodoItem.module.css';

function TodoItem(props) {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
}

export default TodoItem;
