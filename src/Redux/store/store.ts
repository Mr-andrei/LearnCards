import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../reducers/userAuth/authReducer";

export const store = configureStore({
    reducer: {
        authUser: authReducer,

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch