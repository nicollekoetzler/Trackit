import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from "../contexts/UserContext";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LayoutBottom from './Layouts/Bottom';
import LayoutHeader from './Layouts/Header';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillFire } from 'react-icons/ai';


function TodayHabits({id, name, done, currentSequence, highestSequence}){
    
    const [isSelected, setIsSelected] = useState({done});
    
    function ToggleHabit() {

        const { infosUsuario, setInfosUsuario } = useContext(UserContext);
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    
        useEffect(() => {
            const header = {
                headers: {
                    "Authorization": `Bearer ${ infosUsuario.token }`
                }
            }
            
            const promise = axios.post(URL, header)
        
            promise.then((response) => {
                setIsSelected(!isSelected);
            });
            
            promise.catch((err) => {
                alert("Não foi possível selecionar o hábito");
            });
    
        },[]);
    }

    return (
        <>
            { !done ?
            <UnselectedHabit>
                <div className="text">
                    <h1>{name}</h1>
                    <p>
                        Recorde: 
                        {highestSequence === 1
                        ? ` ${highestSequence} dia`
                        : ` ${highestSequence} dias`}
                    </p>
                </div>
                <Right>
                    <Sequence>
                        <p>
                            {currentSequence === 1
                            ? `${currentSequence} dia`
                            : `${currentSequence} dias`}
                        </p>
                    </Sequence>
                    <div className="blank"></div>
                </Right>
            </UnselectedHabit>
            :
            <SelectedHabit>
            <div className="text">
                <h1>{name}</h1>
                <p>
                    Recorde: 
                    {highestSequence === 1
                    ? ` ${highestSequence} dia`
                    : ` ${highestSequence} dias`}
                </p>
            </div>
            <Right>
                <Sequence>
                    <Fire />
                    <p>
                        {currentSequence === 1
                        ? `${currentSequence} dia`
                        : `${currentSequence} dias`}
                    </p>
                </Sequence>
                <Checkmark />
            </Right>
            </SelectedHabit>
            }
        </>
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
    },[]);

    return(
        <>  
            <LayoutHeader />
            <Container>
                <div className="title">
                    <h1>Quarta-feira, 01</h1>
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
    height: 100vh;
    width: 100%;
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

const UnselectedHabit = styled.div`
    width: 100%;
    /* max-width: 450px; */
    height: 94px;
    margin-top: 16px;
    padding: 15px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;

.text > h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: #001949;
}

.text > p {
    color: gray;
}

.blank {
    height: 30px;
    width: 30px;
}
`

const SelectedHabit = styled.div`
    width: 100%;
    /* max-width: 450px; */
    height: 94px;
    margin-top: 16px;
    padding: 15px;
    /* background-color: white; */
    background-color: #e7e9f6;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #5567C9; */

.text > h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: gray;
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

const Checkmark = styled(AiFillCheckCircle)`
    font-size: 30px;
    color: #5567C9;
    /* color: #4c9b67; */
    margin-top: 6px;
`

const Sequence = styled.div`
    height: 28px;
    background-color: #b7f3d2;
    border-radius: 10px;
    color: #4c9b67;
    font-weight: 700;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Fire = styled(AiFillFire)`
    margin-right: 6px;
    font-size: 20px;
`