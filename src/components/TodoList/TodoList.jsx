import React from "react";
import { TodoItem } from "../TodoItem";

export const TodoList = ({ todos, removeTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    removeTodo={() => removeTodo(index)}
                />
            ))}
        </ul>
    );
};
