export const ACTIONS = {
    ADD_STUDENT: "add",
    DELETE_STUDENT: "delete",
    UPDATE_STUDENT: "update"
};

export default function studentReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_STUDENT:
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload.name,
                    age: action.payload.age,
                    major: action.payload.major
                }
            ];

        case ACTIONS.DELETE_STUDENT:
            return state.filter(
                student => student.id !== action.payload
            );

        case ACTIONS.UPDATE_STUDENT:
            return state.map(student =>
                student.id === action.payload.id
                    ? {
                        ...student,
                        name: action.payload.name,
                        age: action.payload.age,
                        major: action.payload.major
                      }
                    : student
            );

        default:
            return state;
    }
}