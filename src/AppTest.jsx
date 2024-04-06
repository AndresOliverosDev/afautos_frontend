import Button from "./test/Button";
import Table from "./test/Table";

function AppTest() {

  const handleDato = () => {
    //Imprimir
  }

  return (
    <div className="dark:bg-gray-950 bg-slate-200 h-screen flex justify-center items-center text-gray-400 font-semibold flex-col gap-6">
      <h1 className="text-4xl">
        Test Components
      </h1>
      {/* Test componentes */}

      <Table button={<Button />}/>
    </div>
  )
}

export default AppTest;
