import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {UserData} from '../../../API/authApi';

type UserState = {
    userData: UserData | null;
    isAuth: boolean;
};
const initialState: UserState = {
    userData: null,
    isAuth: false,
};


export const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload
        },
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
    },
});


export const {setUserData,setIsAuth} = userSlice.actions;
export default userSlice.reducer


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
