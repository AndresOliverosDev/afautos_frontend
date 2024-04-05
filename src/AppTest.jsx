import Button from "./test/Button";
import Table from "./test/Table";

function AppTest() {
  return (
    <div className="dark:bg-gray-950 h-screen flex justify-center items-center text-gray-400 font-semibold flex-col gap-4">
      <h1 className="text-4xl">
        Test Components
      </h1>
      {/* Test componentes */}
      <Table />
      <Button />
    </div>
  )
}

export default AppTest;
