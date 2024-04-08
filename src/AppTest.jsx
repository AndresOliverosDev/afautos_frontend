import React from "react";
import { useState } from "react";
import Button from "./test/Button";
import Table from "./test/Table";

export const MyContext = React.createContext('');

function AppTest() {

  const handleDato = () => {
    //Imprimir
  }

  const [valueToShare, setValueToSearch] = useState('');

  return (
    <MyContext.Provider value={valueToShare}>
      <div className="dark:bg-gray-950 bg-slate-200 h-screen flex justify-center items-center text-gray-400 font-semibold flex-col gap-6">
        <h1 className="text-4xl">
          Test Components
        </h1>
        {/* Test componentes */}
        <Table button={<Button onclick={()=> handleDato}/>} />
      </div>
    </MyContext.Provider>
  )
}

export default AppTest;
