import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import ProductCard from "./includes/ProductCard";

const Index = (props) => {

    const getproducts = () => {
        let data = new FormData();
        axios.post('/api/users',{emri: "Kreshnik",mbiemri: "Gashi",email:"test@gmail.com"})
    };

    return (
        <Fragment>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img className="banner" src="/src/img/banner.svg" alt="banner"/>
                </div>
                <div className="brands">
                    <img height="140" src="/src/img/brands/dell.png" alt="dell-logo"/>
                    <img height="150" width="200" src="/src/img/brands/logitech.png" alt="logitech-logo"/>
                    <img height="90" src="/src/img/brands/hyperx.png" alt="hyperx-logo"/>
                    <img height="40" width="200" src="/src/img/brands/msi.png" alt="msi-logo"/>
                    <img height="44" width="220" src="/src/img/brands/sony.png" alt="sony-logo"/>
                </div>

                <div className="row my-5">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <Link to='/kompjutere'>
                                <img className="featured-products" src="/src/img/new-products.jpg" alt="new-products"/>
                                <span className="text-center-image">Produkte të reja</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <a href="laptope.html">
                                <img className="featured-products" src="/src/img/best-seller.webp" alt="best-seller"/>
                                <span className="text-center-image">Best Seller</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <a href="celulare.html">
                                <img className="featured-products" src="/src/img/zbritje.jpeg" alt="zbritje"/>
                                <span className="text-center-image">Zbritje</span>
                            </a>
                        </div>
                    </div>
                </div>

                <h2 className="mb-3">Produktet e fundit</h2>
                <button className="btn btn-primary" onClick={getproducts}>Click</button>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <ProductCard key={1}
                                     img="src/img/produktet/pc7.png"
                                     name="Kompjuter PC OFFICE P2000,
                                    16GB DDR4, 3250GB SSD ..."
                                     price="899.99 €" />
                    </div>
                    <div className="col-md-3">
                        <ProductCard key={2}
                                     img="src/img/produktet/laptop6.jpg"
                                     name="Laptop MSI Gaming GE65 Raider
                                    9SE-008XBK, 15.6..."
                                     price="2,051.50 €" />
                    </div>
                    <div className="col-md-3">
                        <ProductCard key={3}
                                     img="src/img/produktet/telefon3.jpg"
                                     name="Apple iPhone 8 Plus, 5.5 ”, 128GB,
                                    i argjendtë."
                                     price="699.99 €" />
                    </div>
                    <div className="col-md-3">
                        <ProductCard key={4}
                                     img="src/img/produktet/tv1.jpg"
                                     name="Televizor PC OFFICE P2000,
                                    16GB DDR4, 3250GB SSD ..."
                                     price="699.99 €" />
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5" style={{backgroundColor: "#f4f3f0"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-5 d-flex flex-row align-items-center justify-content-center">
                            <i className="fas fa-shipping-fast feature-icon"/>
                            <div className="d-flex flex-column ml-3">
                                <span className="font-weight-bold">TRANSPORTI FALAS</span>
                                <span>Për të gjitha qytetet në Kosovë.</span>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 d-flex flex-row align-items-center justify-content-center">
                            <i className="fas fa-credit-card feature-icon"/>
                            <div className="d-flex flex-column ml-3">
                                <span className="font-weight-bold">PAGESA ONLINE</span>
                                <span>Pagesa 100% të sigurta.</span>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 d-flex flex-row align-items-center justify-content-center">
                            <i className="fas fa-undo-alt feature-icon"/>
                            <div className="d-flex flex-column ml-3">
                                <span className="font-weight-bold">KTHIM BRENDA 30 DITËSH</span>
                                <span>Garancion për të gjitha produktet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="mb-3">Produktet më të shitura</h2>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <ProductCard key={1}
                                     img="/src/img/produktet/pc7.png"
                                     name="Kompjuter PC OFFICE P2000,
                                    16GB DDR4, 3250GB SSD ..."
                                     price="899.99 €" />
                    </div>
                    <div className="col-md-3">
                        <ProductCard key={2}
                                     img="src/img/produktet/laptop6.jpg"
                                     name="Laptop MSI Gaming GE65 Raider
                                    9SE-008XBK, 15.6..."
                                     price="2,051.50 €" />
                    </div>
                    <div className="col-md-3">
                        <ProductCard key={3}
                                     img="src/img/produktet/telefon3.jpg"
                                     name="Apple iPhone 8 Plus, 5.5 ”, 128GB,
                                    i argjendtë."
                                     price="699.99 €" />
                    </div>
                    <div className="col-md-3">
                        <ProductCard key={4}
                                     img="src/img/produktet/tv1.jpg"
                                     name="Televizor PC OFFICE P2000,
                                    16GB DDR4, 3250GB SSD ..."
                                     price="699.99 €" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Index;
