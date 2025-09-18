const initialState = {
    numbers: [],
};

export const randomNumberReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_NUMBER':
            return { ...state, numbers: [...state.numbers, action.payload] };
        default:
            return state;
    }
};