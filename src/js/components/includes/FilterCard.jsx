import React,{useState, useEffect} from 'react';

const FilterCard = ({id,title, show, children}) => {

    return (
        <div className="card my-card-shadow mb-1">
            <div className="card-body w-100">
                <div
                    className="card-title d-flex align-items-center mb-0"
                    data-toggle="collapse"
                    data-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls="collapseExample">
                    <span className="font-weight-bold">{title}</span>
                    <span className="font-weight-bold ml-auto"><i className="fa fa-minus"/></span>
                </div>
                <div className={`collapse ${show ? 'show' : ''}`} id={id}>
                    <div className="mt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FilterCard;
