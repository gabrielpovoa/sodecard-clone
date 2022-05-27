import styled from 'styled-components';

export const Container = styled.div`
    background-color: #CCCCCC;
    border-radius: .8rem;
    position: absolute;
    bottom: 20%; left: 0; right: 0;
    width: 45rem;
    max-width: 100%;
    height: calc(4rem - 20%);
    padding: 2rem 5%;
    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const ImageContent = styled.div`
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Image = styled.img`
    max-height: 100%;
    object-fit: cover;
`;

export const Content = styled.div``;

export const Heading = styled.h1`
    color: #333;

    && span {
        color: blue;
        font-weight: 700;
    }
`;
