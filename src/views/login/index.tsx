import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { userContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tittle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export default function Login() {

  const navigate = useNavigate()
  const { singIn, logInGoogle } = useContext(userContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    try {
        await singIn(email, password)
    } catch (error : any) {
        console.log(error.message)
    }
}

  return (
    <div>
        <Tittle>
          <h1>
            Welcome
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </Tittle>
        <Form>
          <input 
            id='email' 
            onChange={e => setEmail(e.target.value)}
            type='email'
          />
          <input 
            id='password' 
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </Form>
        <Buttons>
          <a>
            Forgor your password?
          </a> 
          <button onClick={handleSubmit}>Login</button>
        </Buttons>
    </div>
  );
}