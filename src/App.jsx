import SideBar from "./Pages/SideBar";
import Orders from "./Pages/Orders"
import Hero from "./Pages/Hero"
import "./App.css";

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
        <Orders />
      </div>
    </div>
  );
}

export default App;
