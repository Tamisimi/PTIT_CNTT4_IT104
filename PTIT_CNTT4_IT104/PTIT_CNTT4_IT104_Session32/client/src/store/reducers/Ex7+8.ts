const initialState = {
    registeredUser: null,
    loggedInUser: null,
};

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return { ...state, registeredUser: action.payload };
        case 'CLEAR_USER':
            return { ...state, registeredUser: null };
        case 'LOGIN_USER':
            return { ...state, loggedInUser: action.payload };
        case 'LOGOUT_USER':
            return { ...state, loggedInUser: null };
        default:
            return state;
    }
};