/** Hooks */
import { useState } from "react";

/** Icons */
import {
  RiHomeLine,
  RiShoppingBag3Line,
  RiSettingsLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

/** Components UI */
import { Accordion } from "../components/ui/indexUi";

function SideBar() {
  /** Accordion State */
  const [accordionDashboard, setAccordionDashboard] = useState(false);
  const [accordionShop, setAccordionShop] = useState(false);

  /** Dashboard Accordion Handle Click */
  const handleDashboard = () => {
    setAccordionDashboard((prevState) => !prevState);
    if (accordionShop) {
      setAccordionShop(false);
    }
  };
  /** Dashboard Accordion Handle Click */
  const handleShop = () => {
    setAccordionShop((prevState) => !prevState);
    if (accordionDashboard) {
      setAccordionDashboard(false);
    }
  };

  /** Items Accordion Nav */
  const dashboardItems = ["Item 1", "Item 2", "Item 3"];
  const shopItems = ["Ventas", "Pedidos", "Clientes"];

  /** Links Accordion Nav */
  const linksNav = [
    {
      name: "Ajustes",
      icon: <RiSettingsLine />,
    },
    {
      name: "Cerrar Sesión",
      icon: <RiLogoutBoxLine />,
    },
  ];

  return (
    <div className="rounded-xl bg-ctn-primary-light dark:bg-box-dark overflow-y-auto">
      {/** User */}
      <div className="max-h-44 flex flex-col items-center justify-center gap-1 rounded-xl p-8 dark:bg-ctn-secondary-dark">
        <img
          src="https://img.freepik.com/foto-gratis/cerrar-persona-que-sufre-ansiedad_23-2150859382.jpg?w=360&t=st=1706918423~exp=1706919023~hmac=619551ea5caaf47006f5381bcfd15e2c4f5bf9e4d22c1b09a23bf1b112b11e83"
          alt="Imagen usuario"
          className="h-20 w-20 rounded-full object-cover"
        />
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-400">
          Andres Oliveros
        </h1>
        <p className="rounded-full bg-color-primary-light px-3 py-1 text-xs font-medium text-gray-200 dark:bg-color-primary-dark">
          Fronted Developer
        </p>
      </div>
      {/** Nav */}
      <nav className="mt-4 flex flex-col items-center gap-2 px-6 py-3">
        <Accordion
          title={"Dashboard"}
          state={accordionDashboard}
          items={dashboardItems}
          handle={() => handleDashboard()}
          icon={<RiHomeLine className="h-5 w-5" />}
        />
        <Accordion
          title={"Tienda"}
          state={accordionShop}
          items={shopItems}
          handle={() => handleShop()}
          icon={<RiShoppingBag3Line className="h-5 w-5" />}
        />
        <ul className="mt-1 w-full border-t border-solid border-gray-800 pt-2">
          {linksNav.map((link, index) => (
            <li
              className="hover:bg-color-light flex cursor-pointer items-center gap-2 rounded-lg px-6 py-1 text-gray-900 hover:bg-color-hover-light dark:text-gray-400 hover:dark:bg-color-hover-dark"
              key={index}
            >
              {link.icon}
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default SideBar;
