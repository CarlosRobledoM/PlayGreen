import styled from 'styled-components';
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";

const Container = styled.div`
    width: 100%;
    height: 5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    margin: 2rem 0rem;
`;

const Image = styled.div`
    width: 80%;
    color: #fff;
    font-size: 1.5rem;
    padding-left: 2rem;
    border-radius: 1rem;
    display:flex;
    align-items:center;
`;

const Tittle = styled.h4`
    background-color:#00000009
`;

const Action = styled.div`
    display:flex;
    justify-content: center;
    width: 20%;
    font-size: 2rem;
`;

interface Data{
    sport:string;
    action:string
    img:string
}

export default function HistoryAction(props:Data) {
  return (
    <Container
        id='secondaryBackground'>
        <Image 
        style={{
            height:'100%',
            backgroundImage:`url("${props.img}")`,
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center'
            }} 
        >
            <Tittle>{props.sport}</Tittle>
        </Image>
        <Action style={{
            color: props.action === 'like' ? '#fff' : 'red'
        }}>
            {props.action === 'like' ? <AiFillHeart/> : <AiOutlineClose/>}
        </Action>
    </Container>
  );
}