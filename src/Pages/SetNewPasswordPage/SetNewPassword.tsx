import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/hooks';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { passwordRecovery } from '../../Redux/reducers/userAuth/thunks';
import { Container, InputBlock, LinkStyled, Text, Title } from './styles';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const SetNewPassword = () => {
    const [isPassword, setIsPassword] = useState(false);
    const dispatch = useAppDispatch();
    const { token } = useParams();

    const validation = object({
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
            password: '',
        },

        validationSchema: validation,

        onSubmit: values => {
            // dispatch(passwordRecovery(values));
        },
    });

    return (
        <Container onSubmit={formik.handleSubmit}>
            <Title>Create new password</Title>

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

            <Button type="submit" color="primary" variant="contained">
                Send your password
            </Button>
            <LinkStyled to={'/sign-in'}>Try logging in</LinkStyled>
        </Container>
    );
};

export default SetNewPassword;