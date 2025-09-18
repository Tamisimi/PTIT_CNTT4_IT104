const initialState = {
    users: [
        { id: 1, fullName: "Tran Van Hung", gender: "nam", birthDate: "15/04/2023", location: "Hoan Kiem, Ha Noi" },
        { id: 2, fullName: "Le Thi Mai", gender: "nu", birthDate: "12/08/2015", location: "Ba Dinh, Ha Noi" },
    ],
};

export const userDataReducer = (state = initialState, action: any) => {
    return state;
};