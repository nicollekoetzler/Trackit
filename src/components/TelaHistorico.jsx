import styled from 'styled-components';
import LayoutBottom from './Layouts/Bottom';
import LayoutHeader from './Layouts/Header';

export default function TelaHistorico() {
    return(
        <>  
            <LayoutHeader />
            <Container>
                <div className="title">
                    <h1>Histórico</h1>
                    <p>Em breve!</p>
                    <p>Confira essa funcionalidade novamente a partir do dia 14/03 :)</p>
                </div>
            </Container>
            <LayoutBottom />
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

.title > h1 {
    font-size: 34px;
    font-weight: 700;
    color: #001949;
    padding-top: 110px;
}

.title > p {
    color: gray;
    margin-top: 12px;
}
`