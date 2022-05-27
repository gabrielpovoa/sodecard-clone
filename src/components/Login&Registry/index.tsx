import * as C from './style'
import { Link } from 'react-router-dom'

export const RoutesBtn = () => {
    return (
        <C.Buttons>
            <C.Registry>
                <Link to="/cadastro" >Criar Conta</Link>
            </C.Registry>
            <C.Login >
                <Link to="/login" >Login</Link>
            </C.Login>
        </C.Buttons>
    )
}