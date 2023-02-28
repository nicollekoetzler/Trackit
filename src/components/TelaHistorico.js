import styled from 'styled-components';
import LayoutBottom from './Layouts/Bottom';
import LayoutHeader from './Layouts/Header';

export default function TelaHistorico() {
    return(
        <>  
            <LayoutHeader />
            <Container>
                <h1>Tela Histórico</h1>
            </Container>
            <LayoutBottom />
        </>
    )
}

const Container = styled.div`
    height: 716px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 6px;
`