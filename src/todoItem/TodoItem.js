import React from "react";

const TodoItem = ({ id, title, checked }) => {
  return (
    <li className="todo">
      <label>
        <input type="checkbox" defaultChecked={false} />
        <span>{title}</span>

        <i className="material-icons red-text">delete</i>
      </label>
    </li>
  );
};

export default TodoItem;