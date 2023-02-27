import styled from 'styled-components';
import logotrackit50 from '../assets/css/imgs/logotrackit50.png'
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function TelaCadastro() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    
    const [inputEmail, setInputEmail] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputImage, setInputImage] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    // const [infosCadastro, setInfosCadastro] = useState({});
    
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
            <img src={logotrackit50} />
            <form onSubmit={conferirUrl}>
                <FormStyle>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="Email"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="Senha"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" placeholder="Nome"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputImage(e.target.value)} value={inputImage} type="text" placeholder="Url da foto"/>
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
background-color: white;

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
    margin-top: 32px;
}
`

const FormStyle = styled.div`

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
    margin-top: 16px;
    padding-left: 20px;
    outline: 1px solid #f4f4f4;
    transition: 0.5s;
}

input:focus {
    outline: 1px solid #5567C9;
}
`