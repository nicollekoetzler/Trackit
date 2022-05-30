import styled from 'styled-components';
import logo from '../assets/css/imgs/logo.png'
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function TelaCadastro() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    
    const [inputEmail, setInputEmail] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputImage, setInputImage] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [infosCadastro, setInfosCadastro] = useState({});

    const navigate = useNavigate();

    function setData() {
    
        const body = {
            email: inputEmail,
            name: inputName,
            image: inputImage,
            password: inputPassword
        }
    
        const promise = axios.post(URL, body);
    
        promise.then((response) => {
            navigate("/")
        });
    }

    function conferirUrl(event) {
        event.preventDefault()

        const image = new Image();

        image.src = inputImage
        image.onload = () => setData();
        image.onerror = () => alert("A URL não é válida");
    }

    return(
        <Container>
            <img src={logo} />
            <form onSubmit={conferirUrl}>
                <FormStyle>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="email"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="senha"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" placeholder="nome"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputImage(e.target.value)} value={inputImage} type="text" placeholder="foto"/>
                </FormStyle>
                <Button>
                    <button type="submit">Cadastrar</button>
                </Button>
            </form>
            <Link to={`/`} >
            <p>Já tem uma conta? Faça o login!</p>
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

p{
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    cursor: pointer;
}
`

const Button = styled.div`
button {
    width: 309px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.6px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20.976px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    margin-top: 6px;
}
`

const FormStyle = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin-top: 6px;
}
`