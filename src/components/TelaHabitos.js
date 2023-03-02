import styled from 'styled-components';
import UserContext from "../contexts/UserContext";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LayoutBottom from './Layouts/Bottom';
import LayoutHeader from './Layouts/Header';
import { BiTrash } from 'react-icons/bi';

function MyHabit({id, name}){

    const { infosUsuario, setInfosUsuario } = useContext(UserContext);

    function deleteHabit({id}){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        if (window.confirm('Você realmente deseja excluir este hábito?')) {

            const header = {
                headers: {
                    "Authorization": `Bearer ${ infosUsuario.token }`
                }
            }

            const promise = axios.get(URL, header)

            promise.then(response => {
                // ?
            })
        };
    }

    return(
        <>  
            <MyHabits>
                <div className="text">
                    <h1>{name}</h1>
                    <Trash onClick={deleteHabit()}/>
                </div>
                <div className="line"></div>
                <div className="week">
                    <div className="day"><p>D</p></div>
                    <div className="selectedDay"><p>S</p></div>
                    <div className="selectedDay"><p>T</p></div>
                    <div className="selectedDay"><p>Q</p></div>
                    <div className="selectedDay"><p>Q</p></div>
                    <div className="selectedDay"><p>S</p></div>
                    <div className="day"><p>S</p></div>
                </div>
            </MyHabits>
        </>
    )
}


export default function TelaHabitos(){

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const { infosUsuario, setInfosUsuario } = useContext(UserContext);
    const [ habit, setHabit ] = useState([]);

    useEffect(() => {
        const header = {
            headers: {
                "Authorization": `Bearer ${ infosUsuario.token }`
            }
        }

        const promise = axios.get(URL, header)
    
        promise.then(response => {
            setHabit(response.data)
        })
    },[]);

    return (
        <>  
            <LayoutHeader />
            <Container>
                <div className="title">
                    <h1>Meus hábitos</h1>
                </div>
                <AllHabits>
                        { habit.map( value => <MyHabit id={value.id} name={value.name} days={value.days} />)}
                </AllHabits>
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
    margin-bottom: 16px;
}
`

const AllHabits = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MyHabits = styled.div`
    width: 100%;
    max-width: 450px;
    height: 94px;
    margin-top: 16px;
    padding: 15px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

.text {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: #001949;
}

.line {
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin-bottom: 8px;
}

.week {
    width: 100%;
    height: 40px;
    display: flex;
}

.day {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px 0 2px;
    color: gray;
    font-weight: 700;
}

.selectedDay {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #e7e9f6;
    border: 1px solid #5567C9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px 0 2px;
    font-weight: 700;
    color: #5567C9;
}
`

const Trash = styled(BiTrash)`
    margin-right: 6px;
    font-size: 20px;
    color: #001949;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`