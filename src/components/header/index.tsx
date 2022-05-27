import * as C from './style'
import { Link } from 'react-router-dom'
import sodexoLogo from '../../images/sodexo.svg'

export const Header = () => {
    return (
        <C.Container>
            <C.Logo>
                <Link to='/'>
                    <C.Image src={sodexoLogo} />
                </Link>
            </C.Logo>
        </C.Container>
    )
}
