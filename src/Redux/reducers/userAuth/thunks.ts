import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../../API/authApi';
import { setIsAuth, setUserData } from './authReducer';

export type LoginParams = {
    email: string;
    password: string;
    rememberMe: boolean;
};
export type RegistrationParams = {
    email: string;
    password: string;
};
export type UpdateUser = {
    name: string;
    avatar?: string;
};
export type PasswordRecovery = {
    email: string;
};
const message = `<div style="background-color: lime; padding: 15px">password recovery link: 
                     <a href='http://localhost:3000/set-new-password/$token$'>link</a></div>`;

export const logInUser = createAsyncThunk('user/logIn', async (params: LoginParams, { dispatch }) => {
    const { email, password, rememberMe } = params;
    try {
        const response = await authApi.logIn(email, password, rememberMe);
        dispatch(setUserData(response.data));
        dispatch(setIsAuth(true));
    } catch (e) {
        console.log(e, dispatch);
    }
});
export const registrationUser = createAsyncThunk(
    'user/registration',
    async (params: RegistrationParams, { dispatch }) => {
        const { email, password } = params;
        try {
            const response = await authApi.registration(email, password);
            dispatch(setUserData(response.data.addedUser));
        } catch (e) {
            console.log(e, dispatch);
        }
    }
);
export const isUserAuth = createAsyncThunk('user/isUserAuth', async (params, { dispatch }) => {
    try {
        const response = await authApi.authMe();
        dispatch(setIsAuth(true));
        dispatch(setUserData(response.data));
    } catch (e) {
        console.log(e, dispatch);
    }
});
export const logOutUSer = createAsyncThunk('user/logOut', async (params, { dispatch }) => {
    try {
        const response = await authApi.logOut();
        // dispatch(setUserData(response.data.info));
        dispatch(setIsAuth(false));
    } catch (e) {
        console.log(e, dispatch);
    }
});
export const editUserData = createAsyncThunk('user/updateUser', async (params: UpdateUser, { dispatch }) => {
    try {
        const { name, avatar } = params;
        const response = await authApi.updateUser(name, avatar);
        dispatch(setUserData(response.data.updatedUser));
        dispatch(setIsAuth(true));
    } catch (e) {
        console.log(e, dispatch);
    }
});
export const passwordRecovery = createAsyncThunk(
    'user/passwordRecovery',
    async (params: PasswordRecovery, { dispatch }) => {
        try {
            const { email } = params;
            const response = await authApi.forgotPassword(email, 'UserName', message);

            // const response = await authApi.updateUser(name, avatar);
            // dispatch(setUserData(response.data.updatedUser));
            // dispatch(setIsAuth(true));
        } catch (e) {
            console.log(e, dispatch);
        }
    }
);
