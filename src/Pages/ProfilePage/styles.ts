import styled from '@emotion/styled/macro';

export const Container = styled('div')`
    width: 450px;
    padding: 20px 15px;
    background: #ffffff;
    border-radius: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    -webkit-box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
    box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Title = styled('h3')`
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
`;
export const Name = styled('span')`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
export const Image = styled('img')`
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 1px solid grey;
    border-radius: 50%;
`;

export const InputsGroup = styled('div')`
    width: 80%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const ButtonGroup = styled('div')`
    display: flex;
    column-gap: 10px;
`;
