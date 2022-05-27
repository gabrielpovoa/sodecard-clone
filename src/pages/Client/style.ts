import styled from 'styled-components';

export const Container = styled.div`
    width: 45rem;
    max-width: 100%;
    padding: 2rem 5%;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Header = styled.header`
    width: 100%;
    padding: 2rem 5%;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center; 
    justify-content: space-between;
`;

export const Client = styled.div`
    font-size: 1.4rem;
`;

export const Notification = styled.div`
    font-size: 2rem;
`;

export const CardInfo = styled.div`
    background-color: #CCC;
    border-radius: .9rem;
    padding: 3rem;
    position: relative;
    max-width: 45rem;
    width: 100%;
`;

export const CardContent = styled.div`
`;

export const Receipt = styled.div`
    background-color: blue;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 1rem .4rem;
    border-bottom-right-radius: .9rem;
    border-bottom-left-radius: .9rem;
`;

export const ImagePass = styled.div`
    max-width: 8rem;
    max-height: 8rem;
    margin-bottom: 4rem;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const Balence = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
`;

export const Value = styled.div`
    display: flex;
    && h1 {
        font-weight: 600;
        font-size: 2.3rem;
        color: blue;
    }
    && span {
        color: #000;
        font-weight: 700;
        font-size: 1.4rem;
    }
`;

export const Toggle = styled.img`
    cursor: pointer;
`;

export const Background = styled.div`
    z-index: -100;
    min-height: calc(100vh - 20vh);
    width: 45rem;
    max-width: 100%;
    cursor: pointer;
    border-top-left-radius: 1.3rem;
    border-top-right-radius: 1.3rem ;
    background-color: #FFF;
    position: absolute;
    top: 75%;
    left: 0;
    right: 0;
`;

export const Content = styled.div`
    z-index: 1000;
    padding: 2rem 5%;
    color: #000;
    position: absolute;
    top: 10%; left: 0;
`;

export const Title = styled.div`
    padding: 1rem 0 0 0;
    && h2 {
        font-size: 2rem;
        font-weight: 100;
        border-bottom: 1px solid #222;
    }
`;

export const BoxContainer = styled.div`
    padding: 2rem 5%;
    z-index: 2000;
    position: absolute;
    top: 30%; left: 0; right: 0;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    background-color: #ccc;
    padding: 2rem 5%;
    border-radius: .8rem;
    color: #454545;
    font-weight: 600;
    flex: 1;
    height: 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    && img {
        width: 3rem;
        object-fit: cover;
        margin-bottom: 2rem;
    }
`;