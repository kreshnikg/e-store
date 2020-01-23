import React from 'react';
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card my-card-shadow product"
                 style={{width: "250px"}}>
                <Link to={props.url ? props.url : '#'}>
                    <img className="card-img-top" src={props.img} alt="product-image"/>
                    <div className="card-body">
                        <p className="card-text">{props.name}</p>
                        <div className="d-flex align-items-center">
                            <span className="card-text">{props.price}</span>
                            <div className="ml-auto stars">
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-half-alt"/>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default ProductCard;
