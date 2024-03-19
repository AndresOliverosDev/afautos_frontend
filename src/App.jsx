/** React Router Dom */
import { Route, Routes } from "react-router-dom";

import SideBar from "./pages/SideBar";
import Orders from "./pages/Orders";
import Hero from "./pages/Hero";
import "./App.css";
import Products from "./pages/Products";

function App() {

return (
    <div className="p-2 gap-2 grid h-screen grid-rows-10 grid-cols-5 dark:bg-bg-dark">
      <div className="col-span-5 xl:col-span-4 row-span-1 ">
        <Hero />
      </div>
      <div className="xl:grid hidden row-span-full">
        <SideBar />
      </div>
      <div className="col-span-5 row-span-9 xl:col-span-4 xl:row-span-9 w-full">
        <Routes>
          <Route path="/Pedidos" element={<Orders />} />
          <Route path="/Productos" element={<Products />} />
        </Routes>
      </div>
    </div>
  );}

export default App;
