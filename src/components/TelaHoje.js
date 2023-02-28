import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from "../contexts/UserContext";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LayoutBottom from './Layouts/Bottom';
import LayoutHeader from './Layouts/Header';

function TodayHabits({name, currentSequence, highestSequence}){

    return (
        <Habit>
            <div className="text">
                <h1>{name}</h1>
                <p>
                    {highestSequence > 1
                    ? `${highestSequence} dias`
                    : `${highestSequence} dia`}
                </p>
            </div>
            <Right>
                <Sequence>
                    <p>
                        {currentSequence > 1
                        ? `${currentSequence} dias`
                        : `${currentSequence} dia`}
                    </p>
                </Sequence>
                <Check>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                </Check>
            </Right>
        </Habit>
    )
}

export default function TelaHoje(){

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const { infosUsuario, setInfosUsuario } = useContext(UserContext);
    const [todayHabit, setTodayHabit] = useState([]);

    useEffect(() => {

        const header = {
            headers: {
                "Authorization": `Bearer ${ infosUsuario.token }`
            }
        }

        const promise = axios.get(URL, header)
    
        promise.then(response => {
            setTodayHabit(response.data)
        })
    }, [] );

    return(
        <>  
            <LayoutHeader />
            <Container>
                <div className="title">
                    <h1>Segunda-feira, 27</h1>
                    <p>Vamos lá, está quase!</p>
                </div>
                <Habits>
                    {todayHabit.map(value => <TodayHabits id={value.id} name={value.name} done={value.done} currentSequence={value.currentSequence} highestSequence={value.highestSequence} />)}
                </Habits>
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

.title > p {
    color: gray;
    margin-top: 12px;
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
    /* background-color: #e7e9f6; */
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #5567C9; */

.text > h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: #001949;
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
    font-size: 30px;
    color: #8f8f8f;
    /* color: #4c9b67; */
    margin-top: 6px;
}
`
const Sequence = styled.div`
    height: 28px;
    background-color: #b7f3d2;
    border-radius: 10px;
    color: #4c9b67;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`