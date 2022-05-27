import * as C from './style'
import notFound from '../../images/404.svg'
import { Header } from '../../components/header'
import { RoutesBtn } from '../../components/Login&Registry'

export const NotFound = () => {
    return <>
        <Header />
        <C.Container>
            <C.ImageContainer>
                <C.Image src={notFound} />
            </C.ImageContainer>
            <C.Content>PAGE NOT FOUND</C.Content>
            <RoutesBtn />
        </C.Container>
    </>
}