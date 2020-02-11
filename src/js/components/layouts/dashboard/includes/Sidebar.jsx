import React from 'react';
import SidebarItem from "./SidebarItem";

const Sidebar = (props) => {
    return (
        <nav className="sidebar">
            <ul>
                <SidebarItem title="Home" url="/" icon="fas fa-fw fa-home" />
                <SidebarItem title="Products" url="/products" icon="fas fa-fw fa-box" />
                <SidebarItem title="Users" url="/users" icon="fas fa-fw fa-user" />
            </ul>
        </nav>
    )
};

export default Sidebar;
