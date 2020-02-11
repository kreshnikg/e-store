import React, {Fragment} from 'react';
import Sidebar from "./includes/Sidebar";

const MainLayout = (props) => {
    return (
        <Fragment>
            <Sidebar/>
            <div className="content">
                {props.children}
            </div>
        </Fragment>
    )
};

export default MainLayout;
