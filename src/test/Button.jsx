// Button.js
import React from 'react';
import { Button } from '@tremor/react';

const CustomButton = ({ onClick }) => {
  return (
    <div>
      <Button variant='secondary' onClick={onClick}>
        Enviar
      </Button>
    </div>
  );
};

export default CustomButton;
