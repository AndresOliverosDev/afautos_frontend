/** Hooks */
import { useState } from "react";

/** Icons */
import { 
    RiHomeLine,
    RiShoppingBag3Line,
    RiSettingsLine ,
    RiLogoutBoxLine
} from "react-icons/ri";

/** Components UI */
import { Accordion } from "../components/ui/indexUi";

function SideBar() {

    /** Accordion State */
    const [accordionDashboard, setAccordionDashboard] = useState(false);
    const [accordionShop, setAccordionShop] = useState(false);

    /** Dashboard Accordion Handle Click */
    const handleDashboard = () => {
        setAccordionDashboard(prevState => !prevState);
        if (accordionShop) {
            setAccordionShop(false)
        }
    };
    /** Dashboard Accordion Handle Click */
    const handleShop = () => {
        setAccordionShop(prevState => !prevState)
        if (accordionDashboard) {
            setAccordionDashboard(false)
        }
    };

    /** Items Accordion Nav */
    const dashboardItems = ["Item 1", "Item 2", "Item 3",];
    const shopItems = ["Ventas", "Pedidos", "Clientes",];

    /** Links Accordion Nav */
    const linksNav = [
        {
            name:'Ajustes',
            icon: <RiSettingsLine />
        },
        {
            name:'Cerrar Sesión',
            icon: <RiLogoutBoxLine />
        }
    ];

    return (
        <div className="bg-ctn-primary-light dark:bg-ctn-primary-dark max-h-[99vh] rounded-xl m-1">
            {/** User */}
            <div className="flex flex-col justify-center items-center p-8 gap-2 h-[30vh] dark:bg-ctn-secondary-dark rounded-xl">
                <img src="https://img.freepik.com/foto-gratis/cerrar-persona-que-sufre-ansiedad_23-2150859382.jpg?w=360&t=st=1706918423~exp=1706919023~hmac=619551ea5caaf47006f5381bcfd15e2c4f5bf9e4d22c1b09a23bf1b112b11e83" alt="Imagen usuario" className="w-20 h-20 object-cover rounded-full" />
                <h1 className="text-lg dark:text-gray-400 text-gray-900 font-bold">
                    Andres Oliveros
                </h1>
                <p className="text-xs dark:bg-color-primary-dark bg-color-primary-light rounded-full py-1 px-3 text-gray-200 font-medium">
                    Fronted Developer
                </p>
            </div>
            {/** Nav */}
            <nav className=" mt-4 py-3 px-6 d flex flex-col items-center gap-2 overflow-y-auto">
            <Accordion title={'Dashboard'} state={accordionDashboard} items={dashboardItems} handle={() => handleDashboard()} icon={<RiHomeLine className="h-5 w-5"/>}/>
            <Accordion title={'Tienda'} state={accordionShop} items={shopItems} handle={() => handleShop()} icon={<RiShoppingBag3Line className="h-5 w-5"/>} />
                <ul className="mt-1 pt-2 border-t border-solid border-gray-800 w-full">
                    {
                        linksNav.map((link, index) => (
                            <li className="hover:bg-color-light hover:dark:bg-color-hover-dark rounded-lg cursor-pointer flex items-center gap-2 text-gray-900 dark:text-gray-400 py-1 px-6" key={index}>
                                {link.icon}
                                {link.name}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}
export default SideBar;
