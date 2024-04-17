import { Card, Icon } from "@tremor/react"
import { CircleAvatar } from "../../../components/UI";
import { RiExpandLeftLine, RiLogoutCircleLine, RiMoonLine, RiNotification3Line, RiSettings2Line, RiSunFoggyLine } from "react-icons/ri";
import { mainMenu } from "./data/mainMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarHidden = ({ state, toggleSidebar, user }) => {

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
            className="max-w-12 items-center hidden lg:flex flex-col dark:text-tremor-default dark:text-gray-200 h-full gap-3">
            <CircleAvatar firstWord={user.names} secondWord={user.lastName} />
            <Icon
                icon={RiExpandLeftLine}
                onClick={toggleSidebar}
                variant="shadow"
                className={`cursor-pointer transition-all duration-300 ${state ? "" : "rotate-180"}`}
            />
            {
                mainMenu.map((item, index) => (
                    <Icon key={index} icon={item.icon} onClick={toggleSidebar} className="cursor-pointer" tooltip={item.header} />
                ))
            }
            <div className="flex flex-col pt-4 gap-3">
                <Icon
                    icon={RiSettings2Line}
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                    tooltip="Ajustes" />
                <Icon
                    icon={RiNotification3Line}
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                    tooltip="Notificaciones" />
                <button
                    onClick={() => handleTheme()}
                    className="hover:bg-gray-100 hover:dark:bg-gray-600 rounded-lg cursor-pointer w-full">
                    <Icon
                        icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine}
                        className="cursor-pointer"
                        tooltip={theme === "dark" ? "Tema oscuro" : "Tema claro"}
                    />
                </button>
            </div>
            <Link to='iniciar_sesión' className="text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 rounded-lg cursor-pointer ">
                <Icon icon={RiLogoutCircleLine} color="red-400" />
            </Link>
        </Card>
    );
}

export default SidebarHidden;