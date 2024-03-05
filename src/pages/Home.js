import { Button } from '@mui/material';
import React from 'react';
import {useNavigate } from 'react-router-dom';

function Home(props) {
  let navigate = useNavigate();
    return (
        <>
        <Button onClick={()=> navigate('/dashboard')} variant="outlined">Outlined</Button>
        </>
    );
}

export default Home;