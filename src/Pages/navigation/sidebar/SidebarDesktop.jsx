import { Card, Icon } from "@tremor/react"
import { CircleAvatar, Accordion } from "../../../components/UI";
import { RiExpandLeftLine, RiHomeLine, RiLogoutCircleLine, RiMoonLine, RiNotification3Line, RiSettings2Line, RiSunFoggyLine } from "react-icons/ri";
import { useState } from "react";
import useAccordion from "../../../hooks/ui/useAccordion"
import { mainMenu, settingMenu } from "./data";
import { Link } from "react-router-dom";
import useTheme from "../../../hooks/theme/useTheme";

function SidebarDesktop({ user, state, toggleSidebar }) {

    const { openAccordion, toggleAccordion } = useAccordion();

    const { theme, handleTheme } = useTheme();


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
            <div className="flex flex-col gap-1">
                <h2 className="text-xs text-gray-400">MENU PRINCIPAL</h2>
                <Link to="/inicio" className="flex items-center  px-4 rounded-lg py-1.5 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium  cursor-pointer">
                    <Icon icon={RiHomeLine} className="self-start p-0 pr-2"/>
                    <p className="pe-1 font-medium">Inicio</p>
                </Link>
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

                {
                    settingMenu.map((item, index) => (
                <Link key={index} to={item.link} className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-1.5">
                    <Icon icon={item.icon} className="self-start p-0 pr-2"/>
                    <p className="">{item.name}</p>
                </Link>
                    ))
                }
                <button onClick={() => handleTheme()} className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-1.5 w-full">
                    <Icon icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine} className="self-start p-0 pr-2"/>
                    <p>
                        {
                        theme === "dark" ? "Tema oscuro" : "Tema claro"
                    }
                    </p>
                </button>
            </div>
            <Link to='iniciar_sesión' className="py-1.5 pl-2 flex items-center text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer ">
                <Icon icon={RiLogoutCircleLine} color="red-400" className="self-start p-0 pr-2"/>
                <p>
                    Cerrar sesión
                </p>
            </Link>
        </Card>
    );
};

export default SidebarDesktop;