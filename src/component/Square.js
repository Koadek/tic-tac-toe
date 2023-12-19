import React from 'react';
import Button from '@mui/material/Button';

function Square({ value, onClick }) {
  return (
    <Button
      variant='outlined'
      style={{
        width: '150px',
        height: '150px',
        fontSize: '5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
}

export default Square;
