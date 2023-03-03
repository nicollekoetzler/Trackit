import styled from 'styled-components';
import defaultimage from '../../assets/css/imgs/defaultimage.png';
import logotrackit32 from '../../assets/css/imgs/logotrackit32.png'

export default function LayoutHeader(){
    return(
        <Header>
            <img src={logotrackit32} />
            <img className='profile' src={defaultimage} />
        </Header>
    )
}

const Header = styled.div`
    height: 84px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f2f2f2;
    color: #5567C9;
    font-size: 24px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    justify-content: space-between;
    font-weight: 700;

img {
    height: 32px;
}

.profile {
    height: 50px;
    width: 50px;
    background-color: gray;
    border-radius: 100%;
}
`