import React, { useContext } from 'react';
import styled from 'styled-components';
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthContext';

const Container = styled.div`
    position: absolute;
    bottom: 40px;
    left: 10%;
    border-radius: 1rem;
    font-size: 2rem;
    line-height: 0;
    width: 80%;
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 0;
    background: #ffffff00;
`;

interface Version{
    version:string;
}

export default function BottomNavBar() {
    const navigate = useNavigate()
    const { logOut } = useContext(userContext)
    const handleLogout = async () => {
        try {
            await logOut()
        } catch (error : any) {
            console.log(error.message)
        }
    }
  return (
    <Container id='secondaryBackground'>
        <Button onClick={() => navigate('/Home')}>
            <AiFillHome/> 
        </Button>
        <Button onClick={() => navigate('/History')}>
            <AiFillClockCircle/> 
        </Button>
        <Button onClick={handleLogout}>
            <ImExit /> 
        </Button>
    </Container>
  );
}