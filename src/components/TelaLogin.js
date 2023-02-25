import styled from 'styled-components';
import logo from '../assets/css/imgs/logo.png'
import axios from 'axios'
import {Link} from 'react-router-dom';
import { useState } from 'react';



export default function TelaLogin() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    // infosUsuario - armazena objeto com informações usuário
    const [infosUsuario, setInfosUsuario] = useState({});

    function setData(event) {
        event.preventDefault();

        const body = {
            email: inputEmail,
            password: inputPassword
        }
    
        const promise = axios.post(URL, body);
    
        promise.then((response) => {
            console.log(response);
        });
    }


    return(
        <Container>
            <img src={logo} />
            <form onSubmit={setData}>
                <Email>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="Email"/>
                </Email>
                <Senha>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="Senha"/>
                </Senha>
                <Button>
                    <button type="submit">Entrar</button>
                </Button>
            </form>
            <Link to={`/cadastro`} >
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

img {
    margin-bottom: 15px;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

p {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration: none;
    color: #868e96;
    margin-top: 32px;
    cursor: pointer;
}
`

const Button = styled.div`
button {
    font-family: 'Roboto';
    width: 300px;
    height: 45px;
    background: #5567C9;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 26px;
}
`

const Email = styled.div`

input {
    font-family: 'Roboto';
    background: #f4f4f4;
    border: none;
    border-radius: 50px;
    width: 300px;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    outline: 1px solid #f4f4f4;
    transition: 0.5s;
}

input:focus {
    outline: 1px solid #5567C9;
}
`

const Senha = styled.div`

input {
    background: #f4f4f4;
    border: none;
    border-radius: 50px;
    width: 300px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
    padding-left: 20px;
    outline: 1px solid #f4f4f4;
    transition: 0.5s;
}

input:focus {
    outline: 1px solid #5567C9;
}
`