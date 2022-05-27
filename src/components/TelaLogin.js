import styled from 'styled-components';
import logo from '../assets/css/imgs/logo.png'

export default function TelaLogin() {
    return(
        <Container>
            <img src={logo} />
            <form>
                <Email>
                    <input type="email" placeholder="email"/>
                </Email>
                <Senha>
                    <input type="password" placeholder="senha"/>
                </Senha>
                <Button>
                    <button type="submit">Entrar</button>
                </Button>
            </form>
            <p>Não tem uma conta? Cadastre-se!</p>
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

const Email = styled.div`

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
    color: white;
}
`

const Senha = styled.div`

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
    color: #DBDBDB;
    margin-top: 6px;
}
`