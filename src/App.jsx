import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import { SideBar } from "./pages";

function App() {
  return (
    <div className="p-2 gap-2 grid h-screen grid-rows-10 grid-cols-5 dark:bg-bg-dark">
      <div className="xl:grid hidden row-span-full">
        <SideBar />
      </div>
      <div className="col-span-5 row-span-9 xl:col-span-4 xl:row-span-9 w-full">
        <Routes>
          <Route path="/Productos" element={<ProductsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
