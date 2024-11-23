import { Card, Icon } from "@tremor/react";
import { CircleAvatar } from "../ui";
import { RiExpandLeftLine, RiLogoutCircleLine, RiMoonLine, RiSunFoggyLine } from "react-icons/ri";
import { mainMenu, settingMenu } from "./data";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/theme/useTheme";
import React from "react";

// Definimos la interfaz de las props
interface SidebarHiddenProps {
    logout: any,
    state: boolean;
    toggleSidebar: () => void;
    user: {
        names: string;
        lastName: string;
    };
}

const SidebarHidden: React.FC<SidebarHiddenProps> = ({ state, toggleSidebar, user }) => {
    const { theme, handleTheme } = useTheme();

    return (
        <Card className="max-w-12 items-center hidden lg:flex flex-col dark:text-tremor-default dark:text-gray-200 h-full gap-3">
            <CircleAvatar firstWord={user.names} secondWord={user.lastName} />
            <Icon
                icon={RiExpandLeftLine}
                onClick={toggleSidebar}
                variant="shadow"
                className={`cursor-pointer transition-all duration-150 ${state ? "" : "rotate-180"}`}
            />
            {mainMenu.map((item, index) => (
                <Icon
                    key={index}
                    icon={item.icon}
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                    tooltip={item.header}
                />
            ))}
            <div className="flex flex-col pt-4 gap-3">
                {settingMenu.map((item, index) => (
                    <Icon
                        key={index}
                        icon={item.icon}
                        onClick={toggleSidebar}
                        className="cursor-pointer"
                        tooltip={item.name}
                    />
                ))}
                <button
                    onClick={() => handleTheme()}
                    className="hover:bg-gray-100 hover:dark:bg-gray-600 rounded-lg cursor-pointer w-full"
                >
                    <Icon
                        icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine}
                        className="cursor-pointer"
                        tooltip={theme === "dark" ? "Tema oscuro" : "Tema claro"}
                    />
                </button>
            </div>
            <Link to="/login" className="text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 rounded-lg cursor-pointer">
                <Icon icon={RiLogoutCircleLine} />
            </Link>
        </Card>
    );
};

export default SidebarHidden;