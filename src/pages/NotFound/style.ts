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

export const ImageContainer = styled.div`
    width: 30rem;
`

export const Image = styled.img`
    max-width: 100%;
    object-fit: cover;
`

export const Content = styled.h1`
    padding-block: 3rem;
    color: #000;
`
