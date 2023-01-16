import React from 'react';
import classes from './modules/TodoItem.module.css';

function TodoItem(props) {
  return (
    <div className={classes.item}>
      {props.index}: {props.text}
      <button
        onClick={props.onRemoveTodo}
        className={classes.glowOnHover}
        type="button"
      >
        DELETE
      </button>
    </div>
  );
}

export default TodoItem;
