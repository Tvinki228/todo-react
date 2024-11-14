import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <Header />
            <Form addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
