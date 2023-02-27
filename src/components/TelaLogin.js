import styled from 'styled-components';
import logotrackit50 from '../assets/css/imgs/logotrackit50.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function TelaLogin() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const { infosUsuario, setInfosUsuario } = useContext(UserContext);

    // const [removeLoading, setRemoveLoading] = useState(false);

    const navigate = useNavigate();

    function setData(event) {
        event.preventDefault();

        const body = {
            email: inputEmail,
            password: inputPassword
        }
    
        const promise = axios.post(URL, body);
    
        promise.then((response) => {
            setInfosUsuario(response.data);
            navigate("/hoje")
            // setRemoveLoading(true);
        });

        promise.catch(err => alert("Usuário inválido."));
    }


    return(
        <Container>
            <img src={logotrackit50} />
            <h3>Live your best habits</h3>
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
background-color: white;

img {
    height: 50px;
    margin-bottom: 22px;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h3 {
    color: #001949;
    font-size: 16px;
    margin-bottom: 56px;
}

p {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration: none;
    color: gray;
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