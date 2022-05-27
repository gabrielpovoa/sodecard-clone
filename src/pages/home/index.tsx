import * as C from './style'
import card from '../../images/card.svg'
import { Header } from '../../components/header';
import { Link } from 'react-router-dom';
import { RoutesBtn } from '../../components/Login&Registry';


export const Home = () => {
    return <>
        <Header />
        <C.Container>
            <C.CardImage>
                <C.Image src={card} alt="card - make it rain" />
            </C.CardImage>
            <C.Content>
                <C.Title>Get your food card</C.Title>
            </C.Content>
            <RoutesBtn />
        </C.Container>
    </>

}
