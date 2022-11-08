import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import PageTemplate from '../Pages/PageTemplate';
import NotFoundPage from '../Pages/NotFoundPage';
import RegistrationPage from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage';
import MainPage from '../Pages/Main';
import ProfilePage from '../Pages/ProfilePage';
import {useAppDispatch, useAppSelector} from "../Redux/hooks";
import {isUserAuth} from "../Redux/reducers/userAuth/thunks";
import PasswordRecovery from "../Pages/PasswordRecovery";
import SetNewPassword from "../Pages/SetNewPasswordPage/SetNewPassword";

export const RoutesConfig = {
    main: '/',
    registration: '/registration',
    signIn: '/sign-in',
    packs: '/packs',
    profile: '/profile',
    passwordRecovery: '/passwordRecovery',
    setNewPassword: '/set-new-password/:token',
};

const RouteFile = () => {

    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state.authUser.isAuth);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(isUserAuth());
    }, []);
    //
    // useEffect(() => {
    //     // if (!isAuth) {
    //     //     navigate('/sign-in');
    //     // }
    //     // if (isAuth) {
    //     //     navigate('/profile');
    //     // }
    // }, [isAuth]);


    return (
        <Routes>
            <Route
                path={RoutesConfig.main}
                element={
                    <PageTemplate>
                        <MainPage/>
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.registration}
                element={
                    <PageTemplate>
                        <RegistrationPage/>
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.signIn}
                element={
                    <PageTemplate>
                        <LoginPage/>
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.profile}
                element={
                    <PageTemplate>
                        <ProfilePage/>
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.passwordRecovery}
                element={
                    <PageTemplate>
                        <PasswordRecovery/>
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.setNewPassword}
                element={
                    <PageTemplate>
                        <SetNewPassword/>
                    </PageTemplate>
                }
            />
            <Route
                path="*"
                element={
                    <PageTemplate>
                        <NotFoundPage/>
                    </PageTemplate>
                }
            />
        </Routes>
    );
};

export default RouteFile;
