import styled from 'styled-components';
import CircularButton from '../../components/CircularButton';
import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { addItem } from '../../middleware/api';
import { userContext } from '../../context/AuthContext';
import { relative } from 'path';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    algin-items:center;
`
const Image = styled.div`
    display:flex;
    flex-direction: column;
    algin-items:center;
    justify-content:end;
    margin-bottom:3rem;
    border-radius:2rem;
`

const Buttons = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
`

const Tittle = styled.h1`
    font-size:2rem;
    background: linear-gradient(to bottom, #00000000, #000000 70%);
    padding:1rem 2rem;
    border-radius:2rem;
`

export default function Home() {
    const key = process.env.REACT_APP_UNPLASH_KEY;
    const {user} = useContext(userContext)
    const [sports, setSports] = useState<any[]>([])
    const [sport, setSport] = useState('')
    const [img, setImage] = useState('')

    const getSports = async () => {
        await Axios.get('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php').then((response) => {
        const arrayAllSports = []
        const arraySports = []
        for (var i=0;i<response.data.leagues.length;i++){
            arrayAllSports.push(response.data.leagues[i].strSport)
            for(var j=0;j<arrayAllSports.length;j++){
                if(arraySports.includes(arrayAllSports[j])){
                }
                else{
                    arraySports.push(arrayAllSports[j])
                }
            }
        }
        setSports(arraySports)
        })
    }
    
    useEffect(() => {
        getSports();
    }, [])

    const getImageBySport = async () => {
        const number = Math.floor(Math.random() * sports.length + 1)
        await Axios.get(`https://api.unsplash.com/search/photos?page=1&query=${sports[number]}&client_id=${key}`).then((response) => {
            setImage(response.data.results[0].urls.regular)
            setSport(sports[number])
        })
    }

    useEffect(() => {
        getImageBySport()
    }, [sports])

    

  return (
    <Container id='home'>
        <Image
            style={{
                width: '100%',
                height:500,
                backgroundImage:`url("${img}")`,
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center'
            }} 
        >
            <Tittle>{sport}</Tittle>
        </Image>
        <Buttons>
            <CircularButton setLike={()=>{
                    addItem({ sport: sport, action: 'dislike', user:user.email, image:img })
                    getImageBySport()
                }} version={''}/>
            <CircularButton setLike={()=>{
                    addItem({ sport: sport, action: 'like', user:user.email, image:img })
                    getImageBySport()
                }} version={'Like'}/>
        </Buttons>
    </Container>
  );
}