import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { setName, setKey } from '../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header'
import * as C from './style'
import { useApp } from '../../redux/hooks/useSelector';

export const Login = () => {
    const dispatch = useDispatch()
    const user = useApp(state => state.user)
    const userPassowrd = useApp(state => state.user.password)


    const [registration, setRegistration] = useState('');
    const [userKey, setKey] = useState('');

    const handleRegistration = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistration(e.target.value)
    }
    const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKey(e.target.value)
    }

    return <>
        <Header />
        <C.Container>
            <C.AreaTitle>
                <C.Heading>Login</C.Heading>
            </C.AreaTitle>
            <C.Registry>
                <C.Field
                    type="text"
                    onChange={handleRegistration}
                    value={registration}
                    placeholder={registration ? '' : 'Enter your registry. Ex: Gabriel'}
                />
                <C.Field
                    type="password"
                    onChange={handleKey}
                    value={userKey}
                    placeholder={userKey ? '' : 'Enter your password'}
                />
            </C.Registry>
            <Link to="/user">
                <C.Login>Acess Your Account</C.Login>
            </Link>

        </C.Container>
    </>
}
