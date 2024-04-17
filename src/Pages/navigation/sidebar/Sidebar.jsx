import { useState } from "react";
import SidebarDesktop from "./SidebarDesktop";
import SidebarHidden from "./SidebarHidden";
import MobileNavigation from "./SidebarMobile";

const Sidebar = ({ user }) => {
    const [open, setOpen] = useState(true);
    const [mobile, setMobile] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            {
                open ?
                    <SidebarDesktop user={user} state={open} toggleSidebar={handleOpen} /> :
                    <SidebarHidden user={user} state={open} toggleSidebar={handleOpen} />
            }
            <MobileNavigation user={user} />
        </>
    );
}

export default Sidebar;
