import { Card } from '@tremor/react';
import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás usando React Router para las rutas

const UnauthorizedPage = () => {
  return (
    <Card className='flex items-center justify-center w-full rounded-xl p-10'>
      <h1 className='text-4xl'> 
        No autorizado
      </h1>
    </Card>
  );
};

export default UnauthorizedPage;
