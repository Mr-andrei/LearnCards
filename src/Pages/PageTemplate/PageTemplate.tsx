import React from 'react';
import { Container, Wrapper } from './styles';
import Header from '../../Components/Header/Header';

type Props = {
    children: JSX.Element;
};

const PageTemplate = ({ children }: Props) => {
    return (
        <Wrapper>
            <Header/>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default PageTemplate;