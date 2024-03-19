import { IconTableActions } from "../components/UI/indexUi.js";
import data from "../../JSON/productsData.json";
import Table from "../components/Table/Table";
import { useEffect, useState } from "react";
import { getAllProd } from "../services/productAPI.js";
const Products = () => {
  /** Table Columns - TanStackTable */

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getAllProd();
        setProducts(productsData);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      header: "Imagen",
      accessorKey: "imageUrl",
      isImage:true
    },
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Producto",
      accessorKey: "name",
    },
    {
      header: "Descripcion",
      accessorKey: "desc",
      isFilter: true,
    },
    {
      header: "Cantidad",
      accessorKey: "quantity",
    },
    {
      header: "Precio",
      accessorKey: "price",
      isFilter: true,
    },
    {
      header: "Categoria",
      accessorKey: "cat",
      isFilter: true,
    },
    {
      header: "Marca",
      accessorKey: "brand",
      isFilter: true,
    },
    {
      header: "Acciones",
      cell: () => <IconTableActions />,
    },
  ];

  return (
    <div className="h-full w-full overflow-auto">
      <Table columns={columns} data={products} nameTable={"Productos"} />
    </div>
  );
};
export default Products;
