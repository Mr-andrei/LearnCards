import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const Container = styled('form')`
    width: 450px;
    padding: 20px 15px;

    border-radius: 18px;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;

    -webkit-box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
    box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Title = styled('h3')`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2d2e46;
`;
export const InputBlock = styled('div')`
    width: 80%;
    min-height: 80px;
`;

export const Text = styled('span')`
    margin-top: -20px;
    display: inline-block;
    width: 80%;
    font-family: 'Popins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #9393a2;
`;

export const LinkStyled = styled(Link)`
    width: fit-content;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: #21268f;
`;