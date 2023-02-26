import styled from 'styled-components';
import defaultimage from '../assets/css/imgs/defaultimage.png';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';

export default function TelaHoje(){
    return(
        <>  
            <Header>
                <h1>TrackIt</h1>
                <img src={defaultimage} />
            </Header>
            <Container>
                <div className="title">
                    <h1>Metas de hoje</h1>
                    <p>Vamos lá, está quase!</p>
                </div>
                <Habits>
                    <Habit>
                        <div className="text">
                            <h1>Jogar sudoku</h1>
                            <p>Recorde: 2 dias</p>
                        </div>
                        <Right>
                            <Record>
                                <p>3 dias</p>
                            </Record>
                            <Check>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            </Check>
                        </Right>
                    </Habit>
                    <Habit>
                        <div className="text">
                            <h1>Duolingo - Japonês</h1>
                            <p>Recorde: 2 dias</p>
                        </div>
                        <Right>
                            <Record>
                                <p>4 dias</p>
                            </Record>
                            <Check>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            </Check>
                        </Right>
                    </Habit>
                </Habits>
            </Container>
            <Bottom>
                <Link to={`/habitos`} >
                    <ion-icon name="add-circle-outline"></ion-icon>
                </Link>
                    <div className="home"></div>
                <Link to={`/historico`} >
                    <ion-icon name="calendar-outline"></ion-icon>
                </Link>
            </Bottom>
        </>
    )
}

const Header = styled.div`
    height: 70px;
    background-color: #f3f3f3;
    color: #5567C9;
    font-size: 24px;
    display: flex;
    align-items: center;
    padding: 0 24px 0 24px;
    justify-content: space-between;
    font-weight: 700;

img {
    height: 50px;
    width: 50px;
    background-color: gray;
    border-radius: 100%;
}
`

const Container = styled.div`
    height: 730px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    margin-top: 6px;

.title > h1 {
    font-size: 34px;
    font-weight: 700;
    color: #001949;
}

.title > p {
    color: gray;
    margin-top: 6px;
}

.title {
    margin-bottom: 16px;
}
`
const Habits = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Habit = styled.div`
    width: 100%;
    height: 94px;
    margin-top: 16px;
    padding: 15px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

.text > h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
}

.text > p {
    color: gray;
}
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Check = styled.div`

ion-icon {
    font-size: 34px;
    color: #8f8f8f;
    margin-top: 6px;
}
`
const Record = styled.div`
    height: 28px;
    background-color: #b7f3d2;
    border-radius: 10px;
    color: #4c9b67;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Bottom = styled.div`
    height: 90px;
    width: 100%;
    background-color: #5567C9;
    border-radius: 50% 50% 0 0;
    padding: 34px 58px 34px 58px;
    font-size: 18px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: bottom;
    position: relative;

ion-icon {
    font-size: 34px;
    color: white;
}

.home {
    height: 110px;
    width: 110px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    top: -50%;
    border: 6px solid #f3f3f3;
    right: 155px;
}
`