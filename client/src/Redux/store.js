import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userDeleteProfileReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './Reducers/userReducer';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userDeleteProfile: userDeleteProfileReducer,
});

const userInformationStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

const initialState = {
    userLogin: { userInfo: userInformationStorage, token: token }
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export default store;