import { useState } from "react";
import SidebarDesktop from "./SidebarDesktop";
import SidebarHidden from "./SidebarHidden";
import MobileNavigation from "./SidebarMobile";
import { useNavigate } from "react-router-dom";
import authenticationAPI from "../../services/authentication/authenticationAPI";

const Sidebar = ({ user }) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLogout = () => {
        authenticationAPI.logout();
        navigate("/login");
    }

    return (
        <>
            {
                open ?
                    <SidebarDesktop user={user} state={open} toggleSidebar={handleOpen} logout={handleLogout}/> :
                    <SidebarHidden user={user} state={open} toggleSidebar={handleOpen} logout={handleLogout}/>
            }
            <MobileNavigation user={user} logout={handleLogout}/>
        </>
    );
}

export default Sidebar;
