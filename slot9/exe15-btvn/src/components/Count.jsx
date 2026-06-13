import { useReducer } from "react";
import { countReducer, initialState } from "./countReducer";

export default function Count() {
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
        <div>
            <h1>Counting exercise</h1>
            <p>Total counts: {state.count}</p>
            <div className="d-flex flex-column gap-2">
                <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
                <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
            </div>
        </div>
    )
}