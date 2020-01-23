import React from 'react';
import {Link} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className="nav-item px-3">
            <Link className="nav-link" to={props.to}>{props.children}</Link>
        </li>
    )
};

export default NavItem;
