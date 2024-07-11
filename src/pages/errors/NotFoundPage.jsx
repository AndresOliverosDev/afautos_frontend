import { Button } from '@tremor/react';
import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás usando React Router para las rutas

const NotFoundPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Button className="mt-5"
      variant='secondary'
      color='orange'>
        <Link
          to="/inicio"
        >
          Inicio
        </Link>
      </Button>
    </main>
  );
};

export default NotFoundPage;
