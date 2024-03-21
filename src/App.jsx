/** React Router Dom */
import { Route, Routes } from "react-router-dom";

import "./App.css";
<<<<<<< HEAD

import { SignIn } from "./pages/auth";


function App() {
  return (
    <div className="min-h-screen w-full h-full bg-bg-dark">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}
=======
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

>>>>>>> 1539b7ed92f62b1996c9c0b2c885fddf6c3ede68
export default App;
