import React from 'react';
import {Link} from "react-router-dom";

const PaginationItem = (props) => {
    return (
        <Link to={props.url} className="my-link">
            <span className="pagination-item">{props.page}</span>
        </Link>
    )
};

export default PaginationItem;
