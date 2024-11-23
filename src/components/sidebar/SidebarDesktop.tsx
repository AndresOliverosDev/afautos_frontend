import { Card, Icon } from "@tremor/react";
import { CircleAvatar, Accordion } from "../ui";
import { RiExpandLeftLine, RiLogoutCircleLine, RiMoonLine, RiSunFoggyLine } from "react-icons/ri";
import useAccordion from "../../hooks/ui/useAccordion";
import { mainMenu, settingMenu } from "./data";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/theme/useTheme";
import React from "react";

interface SidebarDesktopProps {
    user: {
        names: string;
        lastName: string;
        position?: string;
    };
    state: boolean;
    toggleSidebar: () => void;
    logout: () => void;
}

const SidebarDesktop: React.FC<SidebarDesktopProps> = ({ user, state, toggleSidebar, logout }) => {
    const { openAccordion, toggleAccordion } = useAccordion();
    const { theme, handleTheme } = useTheme();

    return (
        <Card className="overflow-y-auto max-w-64 p-4 hidden lg:flex flex-col text-tremor-default dark:text-gray-400 text-gray-600 h-full gap-5">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center w-fit mb-1">
                    <CircleAvatar firstWord={user.names} secondWord={user.lastName} />
                    <h1 className="font-medium">
                        {`${user.names} ${user.lastName}`}
                        <p className="text-xs text-gray-400">{user.position}</p>
                    </h1>
                </div>
                <Icon
                    icon={RiExpandLeftLine}
                    onClick={toggleSidebar}
                    variant="shadow"
                    className={`cursor-pointer transition-all duration-150 ${state ? "" : "rotate-180"}`}
                />
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-xs text-gray-400">MENU PRINCIPAL</h2>
                {mainMenu.map((item, index) => (
                    item.accordion ? (
                        <Accordion
                            key={index}
                            title={item.header}
                            state={openAccordion === item.header}
                            items={item.links}
                            handle={() => toggleAccordion(item.header)}
                            icon={item.icon}
                        />
                    ) : (
                        <Link key={index} to={item.link} className="flex items-center px-4 rounded-lg py-1.5 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium cursor-pointer">
                            <Icon icon={item.icon} className="self-start p-0 pr-2" />
                            <p className="pe-1 font-medium">{item.header}</p>
                        </Link>
                    )
                ))}
            </div>
            <div>
                <h2 className="text-xs text-gray-400 mb-2">AJUSTES</h2>
                {settingMenu.map((item, index) => (
                    <Link key={index} to={item.link} className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-1.5">
                        <Icon icon={item.icon} className="self-start p-0 pr-2" />
                        <p>{item.name}</p>
                    </Link>
                ))}
                <button onClick={handleTheme} className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-1.5 w-full">
                    <Icon icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine} className="self-start p-0 pr-2" />
                    <p>{theme === "dark" ? "Tema oscuro" : "Tema claro"}</p>
                </button>
            </div>
            <button 
                className="py-1.5 pl-2 flex items-center text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer"
                onClick={logout}
            >
                <Icon icon={RiLogoutCircleLine} className="self-start p-0 pr-2" />
                <p>Cerrar sesión</p>
            </button>
        </Card>
    );
};

export default SidebarDesktop;
