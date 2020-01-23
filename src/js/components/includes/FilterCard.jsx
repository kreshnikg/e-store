import React from 'react';

const FilterCard = (props) => {
    return (
        <div className="card my-card-shadow mb-1">
            <div className="card-body w-100">
                <div className="card-title d-flex align-items-center mb-4">
                    <span className="font-weight-bold">{props.title}</span>
                    <span className="font-weight-bold ml-auto"><i className="fa fa-minus"/></span>
                </div>
                {props.children}
            </div>
        </div>
    )
};

export default FilterCard;
