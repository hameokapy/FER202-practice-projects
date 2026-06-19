export const ACTIONS = {
    ADD: "add",
    DELETE: "delete",
    TOGGLE: "toggle"
};

export default function todoReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ];

        case ACTIONS.DELETE:
            return state.filter(
                todo => todo.id !== action.payload
            );

        case ACTIONS.TOGGLE:
            return state.map(todo =>
                todo.id === action.payload
                    ? {
                          ...todo,
                          completed: !todo.completed
                      }
                    : todo
            );

        default:
            return state;
    }
}