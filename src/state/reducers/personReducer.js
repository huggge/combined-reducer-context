// change to enum in ts
export const PERSON_CONTEXT = {
    SET_NAME: "setName",
    SET_LASTNAME: "setLastName",
};

export const personReducer = (state, action) => {
    switch (action.type) {
        case PERSON_CONTEXT.SET_NAME:
            return {
                ...state,
                person: {
                    ...state.person,
                    name: action.payload.name,
                }
            };
        case PERSON_CONTEXT.SET_LASTNAME:
            return {
                ...state,
                lastName: action.payload.lastName,
            };
        default:
            return state;
    }
};
