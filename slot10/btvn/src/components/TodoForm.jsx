import {
    useState,
    useRef,
    useEffect
} from "react";

export default function TodoForm({
    addTodo
}) {
    const [input, setInput] =
        useState("");

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = () => {
        if (!input.trim()) return;

        addTodo(input);
        setInput("");

        inputRef.current.focus();
    };

    return (
        <div>
            <input
                ref={inputRef}
                value={input}
                onChange={(e) =>
                    setInput(e.target.value)
                }
                placeholder="Nhập công việc..."
            />

            <button onClick={handleSubmit}>
                Thêm
            </button>
        </div>
    );
}