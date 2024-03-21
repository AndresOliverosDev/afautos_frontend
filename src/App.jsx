/** React Router Dom */
import { Route, Routes } from "react-router-dom";

import "./App.css";

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
export default App;
