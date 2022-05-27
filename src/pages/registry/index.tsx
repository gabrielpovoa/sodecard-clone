import { Header } from "../../components/header"
import * as C from './style'
import React, { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { RoutesBtn } from "../../components/Login&Registry";

export const Registration = () => {
    const [resgistry, setRegistry] = useState('');
    const [date, setdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistry(e.target.value)
    }
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdate(e.target.value)
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return <>
        <Header />
        <C.Container>
            <C.AreaTitle>
                <C.Heading>CADASTRO</C.Heading>
            </C.AreaTitle>
            <C.RegistryArea>
                <C.Field
                    type="text"
                    onChange={handleRegistry}
                    value={resgistry}
                    placeholder={resgistry ? '' : 'Enter your registry. Ex: Gabriel'}
                />
                <C.Field
                    type="date"
                    onChange={handleDate}
                    value={date}
                    placeholder={date ? '' : 'Birthdate. Ex: dd/mm/yyyy'}
                />
                <C.Field
                    type="email"
                    onChange={handleEmail}
                    value={email}
                    placeholder={email ? '' : 'Enter your best e-mail address'}
                />
                <C.Field
                    type="password"
                    onChange={handlePassword}
                    value={password}
                    placeholder={password ? '' : 'Create a strong password'}
                />
            </C.RegistryArea>
            <RoutesBtn />
        </C.Container>
    </>
}