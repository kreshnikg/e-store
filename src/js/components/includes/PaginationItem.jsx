import React from 'react';
import {Link} from "react-router-dom";

const PaginationItem = ({onChange,active,page}) => {
    return (
        <a onClick={() => onChange(page)} className="my-link">
            <span className={`pagination-item ${active && 'active'}`}>{page}</span>
        </a>
    )
};

export default PaginationItem;
