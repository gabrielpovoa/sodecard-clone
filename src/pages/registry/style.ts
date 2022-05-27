import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 5%;
    max-width: 45rem;
    width: 100%;
    margin: 3rem auto 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AreaTitle = styled.div`
    padding-block: 3rem;
`;

export const Heading = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: #fff;
    letter-spacing: 2px;
`;

export const RegistryArea = styled.div`
    max-width: 45rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 2rem;
`;

export const Field = styled.input`
    width: 50rem;
    max-width: 100%;
    padding: 1.5rem 1rem;
    background-color: #454545;
    border-radius: .5rem;
    text-transform: none;
    font-size: 1.6rem;
    color: #F1F1F1;
    font-family: Arial, Helvetica, sans-serif;
`;
