import React, { useState } from 'react';

import { object, string } from 'yup';
import { useFormik } from 'formik';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useAppDispatch } from '../../Redux/hooks';
import { LoginParams, logInUser } from '../../Redux/reducers/userAuth/thunks';

import { ButtonBlock, Container, InfoBlock, InputBlock, InputsContainer, LinkStyled, Text, Title } from './styles';


const LoginPage = () => {
    const [isPassword, setIsPassword] = useState(false);
    const dispatch = useAppDispatch();

    const validation = object({
        email: string().max(100, 'Must be 100 characters or less').email().required('Required'),
        password: string()
            .matches(
                /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/,
                'Password must contain at least 6 characters,one number. '
            )
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true,
        },
        validationSchema: validation,
        onSubmit: (values: LoginParams) => {
            dispatch(logInUser(values));
        },
    });

    return (
        <Container onSubmit={formik.handleSubmit}>
            <Title>Log-in</Title>
            <InputsContainer>
                <InputBlock>
                    <TextField
                        label="E-mail"
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        {...formik.getFieldProps('email')}
                    />
                </InputBlock>
                <InputBlock>
                    <TextField
                        type={isPassword ? 'text' : 'password'}
                        label="Password"
                        {...formik.getFieldProps('password')}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setIsPassword(!isPassword)}
                                        edge="end"
                                    >
                                        {isPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </InputBlock>
            </InputsContainer>
            <ButtonBlock>
                <Button type="submit" color="primary" variant="contained">
                    Log-in
                </Button>
            </ButtonBlock>
            <InfoBlock>
                <Text>Don’t have an account?</Text>
                <LinkStyled to={'/registration'}>Sign Up</LinkStyled>
            </InfoBlock>
        </Container>
    );
};


export default LoginPage;