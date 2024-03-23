import { NavBar } from "../../components/navigation";
import { RiStore3Fill } from "react-icons/ri";
import { ProductsAdd } from "./";

const ProductsNav = () => {

    const icon = <RiStore3Fill />;
    const links = [
        { text: 'Añadir Productos', to: '/agregar_productos' },
        { text: 'Análisis', to: '/análisis_productos' },
        { text: 'Historial', to: '/historial_productos' }
    ];

    return (
        <>
        <NavBar icon={icon} links={links} />
        </>
    );
}

export default ProductsNav;