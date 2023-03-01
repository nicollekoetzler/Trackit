import styled from 'styled-components';
import LayoutBottom from './Layouts/Bottom';
import LayoutHeader from './Layouts/Header';

export default function TelaHabitos(){
    return (
        <>  
            <LayoutHeader />
            <Container>
                <div className="title">
                    <h1>Meus hábitos</h1>
                </div>
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

.title > h1 {
    font-size: 34px;
    font-weight: 700;
    color: #001949;
}
`