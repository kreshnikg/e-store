import React from 'react';

const FilterCardItem = (props) => {
    return (
        <div className="form-group form-check mb-2">
            <input type="checkbox" id={props.id} className="form-check-input"/>
            <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
        </div>
    )
};

export default FilterCardItem;
