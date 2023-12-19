import React, { useState } from 'react';
import Square from '../Square';
import { Paper, Typography, Button, Grid } from '@mui/material';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== null);
  const renderReplayButton = winner || isDraw;

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReplay = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };


  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant='h5' gutterBottom style={{marginBottom: '25px'}}>
        {status}
      </Typography>
      <Grid container spacing={1} justifyContent='center'>
        {[0, 1, 2].map((row) => (
          <Grid container item key={row} justifyContent='center' style={{ paddingTop: 0 }}>
            {[0, 1, 2].map((col) => (
              <Grid item key={col}>
                {renderSquare(row * 3 + col)}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      {renderReplayButton ? (
        <Button
          variant='contained'
          color='primary'
          style={{
            marginTop: '25px',
          }}
          onClick={handleReplay}
        >
          Replay
        </Button>
      ) : null}
    </Paper>
  );
}


export default Board;
