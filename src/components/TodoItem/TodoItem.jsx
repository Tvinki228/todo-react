import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ todo, removeTodo }) => {
    return (
        <li>
            <input type="checkbox" />
            <p className="task-text">{todo}</p>

            <button className="delete-button" onClick={removeTodo}>
                Delete
            </button>
        </li>
    );
};
