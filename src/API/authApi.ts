import axios from 'axios';

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/' ,
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7542/2.0/' : 'https://neko-back.herokuapp.com/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});

export const authApi = {
    testServer() {
        return instance.get(`/ping/?${Date.now()}`);
    },
    registration(email: string, password: string) {
        return instance.post<RegistrationResponse>('/auth/register', {
            email,
            password,
        });
    },
    logIn(email: string, password: string, rememberMe: boolean) {
        return instance.post<UserData>('/auth/login', { email, password, rememberMe });
    },
    logOut() {
        return instance.delete<LogOutResponse>('/auth/me');
    },
    authMe() {
        return instance.post<UserData>('/auth/me');
    },
    updateUser(name: string, avatar: string | undefined) {
        return instance.put<UpdateUser>('/auth/me', { name, avatar });
    },

    forgotPassword(email: string, from: string) {
        return instance.post<ForgotPasswordResponse>('/auth/forgot', { email, from });
    },
    setNewPassword(password: string, token: string) {
        return instance.post<SetNewPasswordResponse>('/auth/set-new-password', { password, token });
    },
};

export type RegistrationResponse = {
    addedUser: any;
    error?: string;
};

export type UserData = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
};

export type UpdateUser = {
    updatedUser: UserData;
    error?: string;
};

export type LogOutResponse = {
    info: string;
    error: string;
};
export type ForgotPasswordResponse = {
    info: string;
    error: string;
};
export type SetNewPasswordResponse = {
    info: string;
    error: string;
};