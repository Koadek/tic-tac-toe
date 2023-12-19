import React from 'react';
import Board from './component/board/Board';
import { Container, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container>
      <div className='app'>
        <Typography variant='h3' gutterBottom>
          Tic Tac Toe
        </Typography>
        <Board />
      </div>
    </Container>
  );
}

export default App;
