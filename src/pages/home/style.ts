import styled from 'styled-components';

export const Container = styled.div`
    max-width: 45rem;
    width: 100%;
    padding: 2rem 5%;
    background-color: #22222210;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.div`
    width: 30rem;
    height: 30rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const Content = styled.div`
    text-decoration: underline;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
`;