import { configureStore } from '@reduxjs/toolkit';
import ex1Reducer from '../store/slices/Ex1Slicer';
import ex2Reducer from '../store/slices/Ex2Slicer';
import ex3Reducer from '../store/slices/Ex3Slicer';
import ex4Reducer from '../store/slices/Ex4Slicer';
import ex5Reducer from '../store/slices/Ex5Slicer';
import ex6Reducer from '../store/slices/Ex6Slicer';
import ex7Reducer from '../store/slices/Ex7Slicer';
import ex8Reducer from '../store/slices/Ex8Slicer';

export const store = configureStore({
    reducer: {
        ex1: ex1Reducer,
        ex2: ex2Reducer,
        ex3: ex3Reducer,
        ex4: ex4Reducer,
        ex5: ex5Reducer,
        ex6: ex6Reducer,
        ex7: ex7Reducer,
        auth: ex8Reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;