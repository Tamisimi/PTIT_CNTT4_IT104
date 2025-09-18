import { combineReducers } from 'redux';
import { profileReducer } from './Ex1';
import { userDataReducer } from './Ex2';
import { counterReducer } from './Ex3';
import { randomNumberReducer } from './Ex4';
import { companyReducer } from './Ex5';
import { themeReducer } from './Ex6';
import { userReducer } from './Ex7+8';

export const rootReducer = combineReducers({
    profile: profileReducer,
    userList: userDataReducer,
    counter: counterReducer,
    randomNumber: randomNumberReducer,
    company: companyReducer,
    theme: themeReducer,
    user: userReducer,
});