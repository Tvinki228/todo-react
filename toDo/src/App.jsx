import "./App.css";
import { Header } from "./components/Header/Header";

const TodoList = () => {
    const todos = ["My first todo", "My second todo"];
    return (
        <ul>
            {todos.map((todo) => (
                <li>
                    <input type="checkbox" /> {todo}
                </li>
            ))}
        </ul>
    );
};

function App() {
    return (
        <>
            <Header />
            <TodoList />
        </>
    );
}

export default App;
