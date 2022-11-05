import React from 'react';
import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { logOutUSer } from '../../Redux/reducers/userAuth/thunks';

import { ButtonContainer, Container, HeaderWrapper } from './styles';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const isAuth = useAppSelector(state => state.authUser.isAuth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onClickLogOut = () => {
        dispatch(logOutUSer());
    };
    const onClickRedirectProfile = () => {
        navigate('/profile');
    };
    return (
        <HeaderWrapper>
            <Container>
                {isAuth && (
                    <ButtonContainer>
                        <Button>Packs list</Button>
                        <Button onClick={onClickRedirectProfile}>Profile</Button>
                        <Button onClick={onClickLogOut} color="secondary">
                            LogOut
                        </Button>
                    </ButtonContainer>
                )}
            </Container>
        </HeaderWrapper>
    );
};

export default Header;