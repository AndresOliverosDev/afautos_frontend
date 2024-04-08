import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="p-2 gap-2 grid h-screen grid-rows-10 grid-cols-5 bg-slate-200 dark:bg-gray-950 overflow-auto">
      <div className="xl:grid hidden row-span-full">
        <Routes>
          <Route path="/*" element={<SideBar />} />
        </Routes>
      </div>
      <div className="max-h-screen col-span-5 row-span-9 xl:col-span-4 xl:row-span-9 w-full">
        <Routes>
          <Route path="/Productos" element={<ProductsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
