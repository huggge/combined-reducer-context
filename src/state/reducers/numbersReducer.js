// change to enum in ts
export const NUMBERS_CONTEXT = {
    SET_AGE: "setAge",
    SET_LENGTH: "setLength",
    SET_CELL: "setCell",
};

export const numbersReducer = (state, action) => {
    switch (action.type) {
        case NUMBERS_CONTEXT.SET_AGE:
            return {
                ...state,
                numbers: {
                    ...state.numbers,
                    age: action.payload.age,
                }
            };
        case NUMBERS_CONTEXT.SET_LENGTH:
            return {
                ...state,
                numbers: {
                    ...state.numbers,
                    length: action.payload.length,
                }
            };
        case NUMBERS_CONTEXT.SET_CELL:
            return {
                ...state,
                numbers: {
                    ...state.numbers,
                    cell: action.payload.cell,
                }
            };
        default:
            return state;
    }
};