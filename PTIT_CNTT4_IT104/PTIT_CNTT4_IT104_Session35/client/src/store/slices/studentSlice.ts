import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        students: [
            {
                id: 1,
                name: "Minh Thu"
            },
            {
                id: 2,
                name: "Minh Huyền",
            },
        ],
    },
    reducers: {
        //Cài đặt nhứng action(hành động)
        addStudent: (state) => {
            state.students
        }
    }
});
//destructoring
export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;