import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer } from './Reducers/userReducer';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
});

const userInformationStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInformationStorage }
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export default store;