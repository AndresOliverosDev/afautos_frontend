import React, { useState } from 'react';
import { Card, Icon } from "@tremor/react";
import { RiCloseLine, RiLogoutCircleLine, RiMenuLine, RiMoonLine, RiNotification3Line, RiSettings2Line, RiSunFoggyLine } from "react-icons/ri";
import { CircleAvatar, Accordion } from "../ui";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { mainMenu } from "./data";
import useAccordion from '../../hooks/ui/useAccordion';
import useTheme from "../../hooks/theme/useTheme";
import { IconType } from 'react-icons';

// Definir los tipos de usuario y el menú principal
type User = {
    names: string;
    lastName: string;
};

// Definimos los tipos de los enlaces del submenú
interface SubMenuLink {
    name: string;
    link: string;
}

// Definimos el tipo de cada item en el menú principal
interface MenuItem {
    header: string;
    accordion: boolean;
    icon: IconType;
    link?: string; // Opcional para los elementos que no tienen submenú
    links?: SubMenuLink[]; // Opcional si el item no tiene submenú
}

// Definir las props del componente
interface MobileNavigationProps {
    user: User;
    logout: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ user, logout }) => {
    const { theme, handleTheme } = useTheme();
    const [openMenu, setOpenMenu] = useState(false);
    const { openAccordion, toggleAccordion } = useAccordion();

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Card className="flex justify-between lg:hidden p-1 text-tremor-default dark:text-gray-300 font-semibold h-12">
                        <Disclosure.Button>
                            <Icon
                                icon={openMenu ? RiCloseLine : RiMenuLine}
                                variant="shadow"
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                        </Disclosure.Button>
                        <div className="flex items-center pr-2 gap-2">
                            <Link to="/notificaciones">
                                <Icon icon={RiNotification3Line} />
                            </Link>
                            <CircleAvatar firstWord={user.names} secondWord={user.lastName} />
                        </div>
                    </Card>

                    <Disclosure.Panel>
                        <Card className="opacity-90">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xs text-gray-400">MENU PRINCIPAL</h2>
                                {
                                    mainMenu.map((item: MenuItem, index: number) => (
                                        item.accordion ? (
                                            <Accordion
                                                key={index}
                                                title={item.header}
                                                state={openAccordion === item.header}
                                                items={item.links || []}
                                                handle={() => toggleAccordion(item.header)}
                                                icon={item.icon}
                                            />
                                        ) : (
                                            <Link
                                                to={item.link || '#'}
                                                key={index}
                                                className="flex items-center px-4 rounded-lg py-1.5 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium cursor-pointer"
                                            >
                                                <Icon icon={item.icon} className="self-start p-0 pr-2" />
                                                <p className="pe-1 font-medium dark:text-gray-400 text-gray-600">{item.header}</p>
                                            </Link>
                                        )
                                    ))
                                }
                            </div>
                            <div className="dark:text-gray-400 text-gray-600 pt-4">
                                <h2 className="text-xs text-gray-400 mb-2">AJUSTES</h2>
                                <Link to="/ajustes" className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5">
                                    <Icon icon={RiSettings2Line} />
                                    <p>Ajustes</p>
                                </Link>
                                <Link to="/notificaciones" className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5">
                                    <Icon icon={RiNotification3Line} />
                                    <p>Notificaciones</p>
                                </Link>
                                <button
                                    onClick={handleTheme}
                                    className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5 w-full"
                                >
                                    <Icon icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine} className="cursor-pointer" />
                                    <label>{theme === "dark" ? "Tema oscuro" : "Tema claro"}</label>
                                </button>
                            </div>
                            <button
                                className="mt-5 pl-2 flex items-center text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer"
                                onClick={logout}
                            >
                                <Icon icon={RiLogoutCircleLine}/>
                                <p>Cerrar sesión</p>
                            </button>
                        </Card>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default MobileNavigation;