import React, {useEffect,useState} from 'react';
import axios from "axios";
import FilterCard from "./includes/FilterCard";
import FilterCardItem from "./includes/FilterCardItem";
import ProductCard from "./includes/ProductCard";
import Pagination from "./includes/Pagination";
import PaginationItem from "./includes/PaginationItem";
import Spinner from "./includes/Spinner.jsx";

const Products = (props) => {

    const [filter, setFilter] = useState('relevant');
    const [state,setState] = useState({
        loading: true,
        products: [],
        currentPage: 1,
        pageSize: 4
    });
    useEffect(() => {
        getProducts();
    },[state.currentPage,filter]);

    const getProducts = () => {
        setState(state=> ({
            ...state,
            loading:true,
            products: []
        }));
        axios.get('/api/products', {
            params: {
                page: null
            }})
            .then((response) => {
                setState(state=> ({
                    ...state,
                    loading:false,
                    products: response.data,

                }))
            })
    };

    const onPageChange = (page) => {
        setState(state=>({
            ...state,
            currentPage: page
        }))
    };

    const totalCount = 10;
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-3 mt-4">
                    <FilterCard id="procesori" show title="PROCESORI">
                        <FilterCardItem id="i7" label="Intel Core i7" />
                        <FilterCardItem id="i5" label="Intel Core i5" />
                        <FilterCardItem id="i3" label="Intel Core i3" />
                        <FilterCardItem id="celeron" label="Intel Core Celeron" />
                        <FilterCardItem id="pentium" label="Intel Core Pentium" />
                    </FilterCard>
                    <FilterCard id="brendi" show title="BRENDI">
                        <FilterCardItem id="dell" label="Dell" />
                        <FilterCardItem id="logitech" label="Logitech" />
                        <FilterCardItem id="hyperx" label="HyperX" />
                        <FilterCardItem id="msi" label="Msi" />
                        <FilterCardItem id="sony" label="Sony" />
                    </FilterCard>
                    <FilterCard id="tipi" title="TIPI">
                        <FilterCardItem id="desktop" label="Desktop" />
                        <FilterCardItem id="notebook" label="Notebook" />
                        <FilterCardItem id="netbook" label="Netbook" />
                        <FilterCardItem id="tablet" label="Tablet" />
                        <FilterCardItem id="gaming" label="Gaming" />
                    </FilterCard>
                    <FilterCard id="sistemi-operativ" title="SISTEMI OPERATIV">
                    </FilterCard>
                    <FilterCard id="memoria" title="MEMORIA (RAM)">
                    </FilterCard>
                </div>
                <div className="col-md-9">
                    <h2 className="py-3">Kompjuterë</h2>
                    <div className="card my-card-shadow mb-4 d-flex align-items-center flex-row" style={{width: "99.5%"}}>
                        <div className="d-flex justify-content-between">
                            <a className={`sort-btn ${filter === 'relevant' ? 'active' : ''}`} onClick={() => setFilter('relevant')}>Relevante</a>
                            <a className={`sort-btn ${filter === 'new' ? 'active' : ''}`} onClick={() => setFilter('new')}>Të reja</a>
                            <a className={`sort-btn ${filter === 'cheap' ? 'active' : ''}`} onClick={() => setFilter('cheap')}>Të lira</a>
                            <a className={`sort-btn ${filter === 'discount' ? 'active' : ''}`} onClick={() => setFilter('discount')}>Zbritje</a>
                        </div>
                        <div className="ml-auto">
                            <a href="#" className="my-link"><i className="fas fa-th-large mr-3"/></a>
                            <a href="#" className="my-link"><i className="fas fa-list mr-3" style={{opacity:".5"}}/></a>
                        </div>
                    </div>
                    <div className="row" id="products-row">
                        {!state.loading ? state.products.map((product) => {
                            return (
                                <ProductCard key={product.produkti_id}
                                             id={product.produkti_id}
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
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={state.pageSize}
                        currentPage={state.currentPage}
                        onPageChange={onPageChange}/>
                </div>
            </div>
        </div>
    )
};

export default Products;
