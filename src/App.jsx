import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";
import CustomersTable from "./pages/customers/CustomersTable";

function App() {
  return (
    <div className="p-2 gap-2 grid h-screen grid-rows-10 grid-cols-5 dark:bg-black">
      {/* Renderizar Sidebar solo cuando no esté en la ruta raíz */}
      <Routes>
        <Route path="/*" element={<ConditionalSideBar />} />
      </Routes>
      
      {/* Contenido principal */}
      <div className="max-h-screen col-span-5 row-span-9 xl:col-span-4 xl:row-span-9 w-full">
        <Routes>
          <Route path="/Productos" element={<ProductsPage />} />
          <Route path="/Clientes" element={<CustomersTable />} />
          <Route path="/" element={<Home />} />
          {/* Redirigir cualquier otra ruta a la raíz */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

// Componente condicional para renderizar Sidebar
const ConditionalSideBar = () => {
  // Obtener la ruta actual
  const currentPath = window.location.pathname;

  // Si la ruta actual no es la raíz, renderizar el Sidebar
  if (currentPath !== "/") {
    return (
      <div className="xl:grid hidden row-span-full">
        <SideBar />
      </div>
    );
  }
  
  // Si la ruta es la raíz, no renderizar el Sidebar
  return null;
};

export default App;
