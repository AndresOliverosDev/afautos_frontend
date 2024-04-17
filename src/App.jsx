import React from "react";
import SideBar from "./pages/navigation/sidebar/Sidebar";
import MyRoutes from "./routes/routes";

function App() {
  return (
    <div className="h-screen p-1 w-full dark:bg-slate-950 bg-slate-200">
      <MyRoutes />
    </div>
  );
}
export default App;
