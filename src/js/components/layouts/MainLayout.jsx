import React, {Fragment} from 'react';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";

const MainLayout = (props) => {
    return (
        <Fragment>
            <Navbar loggedIn={props.loggedIn}/>
            <div className="content">
                {props.children}
            </div>
            <Footer/>
        </Fragment>
    )
};

export default MainLayout;
