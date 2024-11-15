import React, { useState, useRef } from "react";
import "./Form.css";

export const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue("");
            inputRef.current.focus();
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Write a new todo"
                />
                <button className="form-button" type="submit">
                    Add todo
                </button>
            </form>
        </div>
    );
};
