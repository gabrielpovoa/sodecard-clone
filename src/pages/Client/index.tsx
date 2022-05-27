import * as C from './style'
import { useApp } from '../../redux/hooks/useSelector';
import foodPass from '../../images/refeicao_pass.png'
import eyeOpen from '../../images/eye.svg'
import card from '../../images/dashedcard.svg'
import Logocard from '../../images/logocard.svg'
import key from '../../images/key.svg'
import { ScoreUser } from '../userscore'
import { Footer } from '../Footer/Index'
import { Header } from '../../components/header';

export const User = () => {
    const user = useApp(state => state.user)

    return <>
    {!user.name && 'Forbidden Access'}
    {user.name &&
        <C.Container>
            <C.Header>
                <C.Nav>
                    <C.Client>Hello, {user.name}</C.Client>
                    <C.Notification>🚀</C.Notification>
                </C.Nav>
            </C.Header>
            <C.CardInfo>
                <C.CardContent>
                    <C.ImagePass>
                        <C.Image src={foodPass} />
                    </C.ImagePass>
                    <C.Balence>
                        <C.Value>
                            <span>R$</span>
                            <h1>800</h1>
                        </C.Value>
                        <C.Toggle src={eyeOpen} />
                    </C.Balence>
                    <C.Receipt>
                        <h2>See my bank receipt ➡️</h2>
                    </C.Receipt>
                </C.CardContent>
            </C.CardInfo>
            <C.Background>
                <C.Content>
                    <C.Title>
                        <h2>Card`s Options</h2>
                    </C.Title>
                </C.Content>
                <C.BoxContainer>
                    <C.Box>
                        <img src={Logocard} alt="" />
                        <span>Forgot Password</span>
                    </C.Box>
                    <C.Box>
                        <img src={key} alt="" />
                        <span>Change Password</span>
                    </C.Box>
                    <C.Box>
                        <img src={card} alt="" />
                        <span>Block card</span>
                    </C.Box>
                </C.BoxContainer>
                <ScoreUser />
            </C.Background>
        </C.Container>
        }
        <Footer />
    </>
}