import React, { useState } from 'react';

import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import { object, string } from 'yup';

import { ButtonBlock, Container, InputBlock, InputsContainer, Title } from './styles';
import { RegistrationParams, registrationUser } from '../../Redux/reducers/userAuth/thunks';
import { useAppDispatch } from '../../Redux/hooks';

const RegistrationPage = () => {
    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
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

        confirmPassword: string()
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
            confirmPassword: '',
        },
        validationSchema: validation,
        onSubmit: (values: RegistrationParams) => {
            dispatch(registrationUser(values));
        },
    });

    return (
        <Container onSubmit={formik.handleSubmit}>
            <Title>Registration</Title>
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
                <InputBlock>
                    <TextField
                        type={isConfirmPassword ? 'text' : 'password'}
                        label="Confirm password"
                        {...formik.getFieldProps('confirmPassword')}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setIsConfirmPassword(!isConfirmPassword)}
                                        edge="end"
                                    >
                                        {isConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </InputBlock>
            </InputsContainer>
            <ButtonBlock>
                <Button type="submit" color="primary" variant="contained">
                    Registration
                </Button>
            </ButtonBlock>
        </Container>
    );
};

export default RegistrationPage;