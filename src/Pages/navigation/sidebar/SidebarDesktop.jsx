import { Card, Icon } from "@tremor/react"
import { CircleAvatar, Accordion } from "../../../components/UI";
import { RiExpandLeftLine, RiLogoutCircleLine, RiMoonLine, RiNotification3Line, RiSettings2Line, RiSunFoggyLine } from "react-icons/ri";
import { useState } from "react";
import useAccordion from "../../../hooks/ui/useAccordion"
import { mainMenu } from "./data/mainMenu";
import { Link } from "react-router-dom";

function SidebarDesktop({ user, state, toggleSidebar }) {

    const { openAccordion, toggleAccordion } = useAccordion();

    const [theme, setTheme] = useState('dark');
    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        // Cambiar la clase en el elemento <html>
        const htmlElement = document.documentElement;
        if (newTheme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    };

    return (
        <Card
            className="overflow-y-auto max-w-64 p-4 hidden lg:flex flex-col text-tremor-default dark:text-gray-400 text-gray-600 h-full gap-8">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center w-fit">
                    <CircleAvatar firstWord={user.names} secondWord={user.lastName} />
                    <h1
                        className="font-medium">
                        {`${user.names} ${user.lastName}`}
                        <p className="text-xs text-gray-400">
                            {user.position}
                        </p>
                    </h1>
                </div>
                <Icon
                    icon={RiExpandLeftLine}
                    onClick={toggleSidebar}
                    variant="shadow"
                    className={`cursor-pointer transition-all duration-300 ${state ? "" : "rotate-180"}`}
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xs text-gray-400">MENU PRINCIPAL</h2>
                {
                    mainMenu.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.header}
                            state={openAccordion === `${item.header}`}
                            items={item.links}
                            handle={() => toggleAccordion(item.header)}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
            <div>
                <h2 className="text-xs text-gray-400 mb-2">AJUSTES</h2>
                <Link to="/ajustes" className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5">
                    <Icon icon={RiSettings2Line} />
                    <p className="">Ajustes</p>
                </Link>
                <Link to='notificaciones' className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5">
                    <Icon icon={RiNotification3Line} />
                    <p className="">Notificaciones</p>
                </Link>
                <button onClick={() => handleTheme()} className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5 w-full">
                    <Icon icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine} />
                    <p>
                        {
                        theme === "dark" ? "Tema oscuro" : "Tema claro"
                    }
                    </p>
                </button>
            </div>
            <Link to='iniciar_sesión' className="pl-2 flex items-center text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer ">
                <Icon icon={RiLogoutCircleLine} color="red-400" />
                <p>
                    Cerrar sesión
                </p>
            </Link>
        </Card>
    );
};

export default SidebarDesktop;