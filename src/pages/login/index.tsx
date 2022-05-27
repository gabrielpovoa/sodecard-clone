import { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../../components/header'
import * as C from './style'

export const Login = () => {
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
                    placeholder={userKey ? '' : 'Create a strong password'}
                />
            </C.Registry>
            <Link to="/user">
                <C.Login>Acess Your Account</C.Login>
            </Link>

        </C.Container>
    </>
}
