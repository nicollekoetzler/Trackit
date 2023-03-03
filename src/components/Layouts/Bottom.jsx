import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LayoutBottom(){
    const percentage = 66;

    return(
        <Bottom>
            <Link to={`/habitos`} >
                <ion-icon name="add-circle-outline"></ion-icon>
            </Link>
            <Link to={`/hoje`}>
                <div className="home">
                    <CircularProgressbar 
                        value={percentage}
                        text={''}
                        background
                        styles={buildStyles({
                        backgroundColor: "#ffffff",
                        textColor: "#ffffff",
                        pathColor: "#5567C9",
                        trailColor: "transparent",
                        textSize: "18px"
                        })}
                    />
                    <p>Hoje</p>
                </div>
            </Link>
            <Link to={`/historico`} >
                <ion-icon name="calendar-outline"></ion-icon>
            </Link>
        </Bottom>
    )
}

const Bottom = styled.div`
    height: 90px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #5567C9;
    border-radius: 50% 50% 0 0;
    padding: 34px 58px 34px 58px;
    font-size: 18px;
    color: white;
    display: flex;
    justify-content: space-between;

ion-icon {
    font-size: 34px;
    color: white;
    cursor: pointer;
}

.home {
    height: 110px;
    width: 110px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    top: -50%;
    border: 6px solid #f3f3f3;
    left: 50%;
    transform: translateX(-50%);
    color: #001949;
    font-weight: 700;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
    position: absolute;
    z-index: 10;
}
`