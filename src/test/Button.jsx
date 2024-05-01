// Button.js
import React from 'react';
import { Button } from '@tremor/react';
import { MyContext } from '../AppTest';

const CustomButton = ({ ...props }) => {
  return (
    <div>
      <Button variant='secondary' {...props}>
        Enviar
      </Button>
    </div>
  );
};

export default CustomButton;
