import styled from 'styled-components';

export default function TelaHoje(){
    return(
        <>
            <Container>
                <div className="title">
                    <h1>Segunda-feira, 17/05</h1>
                    <h3>Nenhum hábito concluído ainda</h3>
                </div>
                <Habits>
                    <Habit>
                        <div className="text">
                            <h1>teste</h1>
                            <p>teste2</p>
                        </div>
                        <Check></Check>
                    </Habit>
                </Habits>
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #E7E7E7;
    display: flex;
    flex-direction: column;
    padding: 24px;

h1 {
    font-size: 22.976px;
    color: #126BA5;
}

h3 {
    font-size: 17.976px;
    color: #BABABA;
}
`
const Habits = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Habit = styled.div`
    width: 100vw;
    height: 94px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Check = styled.div`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`