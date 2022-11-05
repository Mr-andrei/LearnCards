import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageTemplate from '../Pages/PageTemplate';
import NotFoundPage from '../Pages/NotFoundPage';
import RegistrationPage from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage';
import MainPage from '../Pages/Main';
import ProfilePage from '../Pages/ProfilePage';

export const RoutesConfig = {
    main: '/',
    registration: '/registration',
    signIn: '/sign-in',
    packs: '/packs',
    profile: '/profile',
};

const RouteFile = () => {
    return (
        <Routes>
            <Route
                path={RoutesConfig.main}
                element={
                    <PageTemplate>
                        <MainPage />
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.registration}
                element={
                    <PageTemplate>
                        <RegistrationPage />
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.signIn}
                element={
                    <PageTemplate>
                        <LoginPage />
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.profile}
                element={
                    <PageTemplate>
                        <ProfilePage />
                    </PageTemplate>
                }
            />
            <Route
                path="*"
                element={
                    <PageTemplate>
                        <NotFoundPage />
                    </PageTemplate>
                }
            />
        </Routes>
    );
};

export default RouteFile;
