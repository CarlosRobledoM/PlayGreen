import React from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";

const Button = styled.button`
    border-radius: 100%;
    padding: 1rem;
    font-size: 2rem;
    line-height: 0;
    margin: 0rem 1rem;
`;

interface Version{
    version:string;
    setLike:any
}

export default function CircularButton(props:Version) {
  return (
    <Button 
      onClick={props.setLike}
      id={props.version === '' ? 'secondaryButton' : ''}
    >
      {props.version === 'Like' ? <AiFillHeart/> : <AiOutlineClose/>} 
    </Button>
  );
}