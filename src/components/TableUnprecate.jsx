import { P, Psmall } from "./ui/indexUi";
const Table = () => {
  const data = [
    {
      idPed: "00001",
      cliente: "Andres Oliveros",
      compra: "0001",
      fecha: "12/02/2021",
      estado: "Pendiente",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00002",
      cliente: "Rene Descartes",
      compra: "0002",
      fecha: "24/09/2023",
      estado: "Pendiente",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00003",
      cliente: "Søren Kierkegaard",
      compra: "0003",
      fecha: "12/02/2021",
      estado: "En proceso",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00004",
      cliente: "Friedrich Nietzsche",
      compra: "0004",
      fecha: "01/02/2022",
      estado: "Entregado",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00001",
      cliente: "Andres Oliveros",
      compra: "0001",
      fecha: "12/02/2021",
      estado: "Pendiente",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00002",
      cliente: "Rene Descartes",
      compra: "0002",
      fecha: "24/09/2023",
      estado: "Pendiente",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00003",
      cliente: "Søren Kierkegaard",
      compra: "0003",
      fecha: "12/02/2021",
      estado: "En proceso",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00004",
      cliente: "Friedrich Nietzsche",
      compra: "0004",
      fecha: "01/02/2022",
      estado: "Entregado",
      email: "AndresOliveros@gmail.com",
    },
    {
      idPed: "00001",
      cliente: "Andres Oliveros",
      compra: "0001",
      fecha: "12/02/2021",
      estado: "Pendiente",
      email: "AndresOliveros@gmail.com",
    },
  ];

  return (
    <div className="flex justify-center h-full overflow-auto p-5">
      <div className="col-span-12 w-full">
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-dTextNeu space-y-6 w-full">
            <thead className="bg-gray-800 text-dTextNeu">
              <tr>
                <th className="p-3">
                  <P text="ID Pedido" styles="font-black" />
                </th>
                <th className="p-3">
                  <P text="Cliente" styles="font-black" />
                </th>
                <th>
                  <P text="Compra" styles="font-black" />
                </th>
                <th>
                  <P text="Fecha" styles="font-black" />
                </th>
                <th>
                  <P text="Estado" styles="font-black" />
                </th>
                <th>
                  <P text="Acciones" styles="font-black" />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr key={key} className="">
                    <td className="p-3">
                      <P text={val.idPed} styles="text-center" />
                    </td>
                    <td className="p-3">
                      <P text={val.cliente} />
                      <Psmall text={val.email} styles="text-dTextMut" />
                    </td>
                    <td>
                      <P text={val.compra} styles="text-center" />
                    </td>
                    <td>
                      <P text={val.fecha} styles="font-extrabold" />
                    </td>
                    <td>
                      <P text={val.estado} styles="font-extrabold" />
                    </td>
                    <td className="p-3"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
