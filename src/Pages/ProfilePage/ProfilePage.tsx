import React, { ChangeEvent, useEffect, useState } from 'react';
import { ButtonGroup, Container, Image, InputsGroup, Name, Title } from './styles';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { Button, TextField } from '@mui/material';
import { editUserData } from '../../Redux/reducers/userAuth/thunks';

const ProfilePage = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('');
    const [imageLink, setImageLink] = useState<string | undefined>('');

    const userData = useAppSelector(state => state.authUser.userData);
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(editUserData({ name: name, avatar: imageLink }));
    };
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImageLink(e.currentTarget.value);
    };
    useEffect(() => {
        userData && setName(userData?.name);
        userData && setImageLink(userData?.avatar);
    }, [userData]);

    return (
        <Container>
            <Title>Profile</Title>
            <Name>{userData?.name}</Name>
            <Image src={userData?.avatar} alt="avatar" />
            {isEdit && (
                <InputsGroup>
                    <TextField onChange={onNameChange} value={name} variant="outlined" label="Name" />
                    <TextField onChange={onImageChange} value={imageLink} variant="outlined" label="Img link" />
                </InputsGroup>
            )}
            <ButtonGroup>
                <Button onClick={() => setIsEdit(!isEdit)} variant="text">
                    Edit
                </Button>
                <Button variant="contained" onClick={onClick}>
                    Save
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default ProfilePage;