import React from "react";

function TodoItem({
    todo,
    deleteTodo,
    toggleTodo
}) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                    toggleTodo(todo.id)
                }
            />
            {" "}
            <span
                style={{
                    textDecoration:
                        todo.completed
                            ? "line-through"
                            : "none"
                }}
            >
                {todo.text}
            </span>
            {"  "}
            <button
                onClick={() =>
                    deleteTodo(todo.id)
                }
            >
                Xóa
            </button>
        </li>
    );
}

export default React.memo(TodoItem);