import React, {useEffect,useState} from 'react';
import axios from "axios";
import FilterCard from "./includes/FilterCard";
import FilterCardItem from "./includes/FilterCardItem";
import ProductCard from "./includes/ProductCard";
import Pagination from "./includes/Pagination";
import PaginationItem from "./includes/PaginationItem";
import Spinner from "./includes/Spinner.jsx";

const Products = (props) => {

    const productList = [
        {id:"0",img: 'src/img/produktet/kompjutere/pc.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"1",img: 'src/img/produktet/kompjutere/pc1.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"2",img: 'src/img/produktet/kompjutere/pc2.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"3",img: 'src/img/produktet/kompjutere/pc3.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"4",img: 'src/img/produktet/kompjutere/pc4.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"5",img: 'src/img/produktet/kompjutere/pc5.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"7",img: 'src/img/produktet/kompjutere/pc7.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"8",img: 'src/img/produktet/kompjutere/pc.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'},
        {id:"1",img: 'src/img/produktet/kompjutere/pc1.jpg', name: 'Kompjuter MSI Gaming', price: '999.99'}
    ];

    const [state,setState] = useState({
        loading: true,
        products: []
    });
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setState({
                    loading:false,
                    products: response.data
                })
            })
    },[]);

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-3 mt-4">
                    <FilterCard title="PROCESORI">
                        <FilterCardItem id="i7" label="Intel Core i7" />
                        <FilterCardItem id="i5" label="Intel Core i5" />
                        <FilterCardItem id="i3" label="Intel Core i3" />
                        <FilterCardItem id="celeron" label="Intel Core Celeron" />
                        <FilterCardItem id="pentium" label="Intel Core Pentium" />
                    </FilterCard>
                    <FilterCard title="BRENDI">
                        <FilterCardItem id="dell" label="Dell" />
                        <FilterCardItem id="logitech" label="Logitech" />
                        <FilterCardItem id="hyperx" label="HyperX" />
                        <FilterCardItem id="msi" label="Msi" />
                        <FilterCardItem id="sony" label="Sony" />
                    </FilterCard>
                    <FilterCard title="TIPI">
                        <FilterCardItem id="desktop" label="Desktop" />
                        <FilterCardItem id="notebook" label="Notebook" />
                        <FilterCardItem id="netbook" label="Netbook" />
                        <FilterCardItem id="tablet" label="Tablet" />
                        <FilterCardItem id="gaming" label="Gaming" />
                    </FilterCard>
                    <div className="card my-card-shadow mt-1">
                        <div className="card-body w-100">
                            <div className="d-flex align-items-center">
                                <span className="font-weight-bold">SISTEMI OPERATIV</span>
                                <span className="font-weight-bold ml-auto"><i className="fa fa-plus"/></span>
                            </div>
                        </div>
                    </div>
                    <div className="card my-card-shadow mt-1">
                        <div className="card-body w-100">
                            <div className="d-flex align-items-center">
                                <span className="font-weight-bold">MEMORIA (RAM)</span>
                                <span className="font-weight-bold ml-auto"><i className="fa fa-plus"/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <h2 className="py-3">Kompjuterë</h2>
                    <div className="card my-card-shadow mb-4 d-flex align-items-center flex-row" style={{width: "99.5%"}}>
                        <div className="d-flex justify-content-between">
                            <a className="sort-btn active" href="#">Relevante</a>
                            <a className="sort-btn" href="#">Të reja</a>
                            <a className="sort-btn" href="#">Të lira</a>
                            <a className="sort-btn" href="#">Zbritje</a>
                        </div>
                        <div className="ml-auto">
                            <a href="#" className="my-link"><i className="fas fa-th-large mr-3"/></a>
                            <a href="#" className="my-link"><i className="fas fa-list mr-3" style={{opacity:".5"}}/></a>
                        </div>
                    </div>
                    <div className="row" id="products-row">
                        {!state.loading ? state.products.map((product) => {
                            return (
                                <ProductCard key={product.id}
                                             id={product.id}
                                             img={'src/img/produktet/kompjutere/pc.jpg'}
                                             name={product.emertimi}
                                             price={product.cmimi}/>
                            )
                        }) :
                            <div className="w-100 text-center mb-3">
                                <Spinner loading={state.loading}/>
                            </div>
                        }
                    </div>
                    <Pagination>
                        <PaginationItem url="#" page="1"/>
                        <PaginationItem url="#" page="2"/>
                        <PaginationItem url="#" page="3"/>
                        <PaginationItem url="#" page="..."/>
                        <PaginationItem url="#" page="7"/>
                        <PaginationItem url="#" page="8"/>
                        <PaginationItem url="#" page="9"/>
                    </Pagination>
                </div>
            </div>
        </div>
    )
};

export default Products;
