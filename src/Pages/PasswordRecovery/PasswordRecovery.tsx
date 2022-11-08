import React from 'react';
import { Container, Title, InputBlock, Text, LinkStyled } from './styles';
import { object, string } from 'yup';
import { useFormik } from 'formik';

import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../Redux/hooks';
import { passwordRecovery } from '../../Redux/reducers/userAuth/thunks';

const PasswordRecovery = () => {
    const dispatch = useAppDispatch();

    const validation = object({
        email: string().max(100, 'Must be 100 characters or less').email().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },

        validationSchema: validation,

        onSubmit: values => {
            dispatch(passwordRecovery(values));
        },
    });

    return (
        <Container onSubmit={formik.handleSubmit}>
            <Title>Forgot your password?</Title>

            <InputBlock>
                <TextField
                    label="E-mail"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    {...formik.getFieldProps('email')}
                />
            </InputBlock>

            <Text>Enter your email address and we will send you further instructions </Text>

            <Button type="submit" color="primary" variant="contained">
                Send message
            </Button>
            <LinkStyled to={'/sign-in'}>Try logging in</LinkStyled>
        </Container>
    );
};

export default PasswordRecovery;