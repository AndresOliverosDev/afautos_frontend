import React from "react";
import MyRoutes from "./routes/routes";
import "./App.css"

function App() {
  return (
    <div className="h-screen p-1 w-full dark:bg-slate-950 bg-slate-200 dark:text-gray-200">
      <MyRoutes />
    </div>
  );
}
export default App;
