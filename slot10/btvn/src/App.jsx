import {
    useReducer,
    useMemo,
    useCallback,
    useEffect
} from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {
    useTheme
} from "./contexts/ThemeContext";

import useLocalStorage from "./hooks/useLocalStorage";

import todoReducer, {
    ACTIONS
} from "./reducers/todoReducer";

export default function App() {

    const [storedTodos, setStoredTodos] =
        useLocalStorage("todos", []);

    const [todos, dispatch] = useReducer(
        todoReducer,
        storedTodos
    );

    const {
        darkMode,
        toggleTheme
    } = useTheme();

    useEffect(() => {
        setStoredTodos(todos);
    }, [todos, setStoredTodos]);

    const addTodo = useCallback((text) => {
        dispatch({
            type: ACTIONS.ADD,
            payload: text
        });
    }, []);

    const deleteTodo = useCallback((id) => {
        dispatch({
            type: ACTIONS.DELETE,
            payload: id
        });
    }, []);

    const toggleTodo = useCallback((id) => {
        dispatch({
            type: ACTIONS.TOGGLE,
            payload: id
        });
    }, []);

    const unfinishedCount =
        useMemo(() => {
            return todos.filter(
                todo => !todo.completed
            ).length;
        }, [todos]);

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "30px",
                backgroundColor:
                    darkMode
                        ? "#222"
                        : "#fff",
                color:
                    darkMode
                        ? "#fff"
                        : "#000",
                textAlign: 'center'
            }}
        >
            <h1>
                React Hooks Demo
            </h1>

            <button
                onClick={toggleTheme}
            >
                {darkMode
                    ? "☀️ Light Mode"
                    : "🌙 Dark Mode"}
            </button>

            <hr />

            <h2>Thêm công việc</h2>

            <TodoForm
                addTodo={addTodo}
            />

            <h2>
                Chưa hoàn thành:
                {" "}
                {unfinishedCount}
            </h2>

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
}