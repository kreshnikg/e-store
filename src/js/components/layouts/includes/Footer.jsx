import React from 'react';
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="container-fluid" style={{backgroundColor: "#f4f3f0"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 pt-4">
                        <img className="mb-2" src="src/img/logo.png" height="100" alt="logo"/><br/>
                        <span>Ne jemi një kompani e re që
							vazhdimisht po kërkojmë ide të reja dhe
							kreative që t'ju ndihmojmë juve me
							produktet tona në punët tuaja të
							përditshme.</span>
                    </div>
                    <div className="col-md-3 pt-4">
                        <h3>Kontakti</h3>
                        <div className="d-flex flex-column pt-2">
                            <a className="my-link" href="https://goo.gl/maps/kmsiaiFNfe2oeUsVA" target="_blank"
                               rel="noopener noreferrer"><i
                                className="fas fa-fw fa-map-marker-alt mr-1 my-2"/> Prizren, Kosovë</a>
                            <a className="my-link" href="tel:+38349123456"><i
                                className="fas fa-fw fa-phone mr-1 my-2"/> +38349123456</a>
                            <a className="my-link" href="mailto:kreshnikg@gmail.com"><i
                                className="fas fa-fw fa-envelope mr-1 my-2"/> kreshnikg@gmail.com</a>
                            <a className="my-link" href="skype:kreshnik_gashi"><i
                                className="fab fa-fw fa-skype mr-1 my-2"/> kreshnik_gashi</a>
                        </div>
                    </div>
                    <div className="col-md-3 pt-4">
                        <h3>Kategoritë</h3>
                        <div className="d-flex flex-column pt-2">
                            <Link className="my-link my-1" to="kompjutere">Kompjuterë</Link>
                            <Link className="my-link my-1" to="/laptope">Laptopë</Link>
                            <Link className="my-link my-1" to="/televizore">Televizorë</Link>
                            <Link className="my-link my-1" to="/celulare">Celularë</Link>
                            <Link className="my-link my-1" to="/aksesore">Aksesorë</Link>
                        </div>
                    </div>
                    <div className="col-md-3 pt-4">
                        <h3>Brendet</h3>
                        <div className="d-flex flex-column pt-2">
                            <a className="my-link my-1" href="#">Dell</a>
                            <a className="my-link my-1" href="#">Logitech</a>
                            <a className="my-link my-1" href="#">HyperX</a>
                            <a className="my-link my-1" href="#">Msi</a>
                            <a className="my-link my-1" href="#">Sony</a>
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <hr/>
                    <div className="d-flex align-items-center">
                        <span className="">Copyright © 2020 E-Store. Të gjitha të drejtat e rezervuara.</span>
                        <div className="ml-auto">
                            <a href="#" className="my-link"><i className="fab fa-instagram mx-2"/></a>
                            <a href="#" className="my-link"><i className="fab fa-facebook mx-2"/></a>
                            <a href="#" className="my-link"><i className="fab fa-twitter mx-2"/></a>
                            <a href="#" className="my-link"><i className="fab fa-linkedin mx-2"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
