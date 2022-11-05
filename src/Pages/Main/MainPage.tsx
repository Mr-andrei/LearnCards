import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { isUserAuth } from '../../Redux/reducers/userAuth/thunks';

const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.authUser.isAuth);

    console.log(isAuth);
    useEffect(() => {
        dispatch(isUserAuth());
    }, []);

    useEffect(() => {
        if (isAuth) {
            navigate('/sign-in');
        }
    }, [isAuth]);

    return <div>Main Page</div>;
};

export default MainPage;