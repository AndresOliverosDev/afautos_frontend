import React from "react";
import MyRoutes from "./routes/routes";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="h-screen p-1 w-full dark:bg-dark-background bg-light-background dark:text-gray-200">
      <MyRoutes />
    </div>
  );
};

export default App;