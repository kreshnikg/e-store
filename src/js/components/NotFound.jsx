import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <div className="container d-flex justify-content-center align-items-center flex-column mb-4">
            <img className="img-fluid mt-n2" width="700" src="/src/img/custom404.svg" alt="not-found"/>
            <Link to="/" className="btn my-btn-primary-color mt-3">Kthehu ne faqen kryesore</Link>
        </div>
        </>
    )
};

export default NotFound;
