import React from 'react';
import {Link} from "react-router-dom";

const SidebarItem = ({title,url,icon}) => {
    return (
        <li className="sidebar-item">
            <Link to={url} className="sidebar-link">
                <i className={icon}/>{title}
            </Link>
        </li>
    )
};

export default SidebarItem;
