import React from 'react';
import PaginationItem from "./PaginationItem";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange,children }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    let pages = [];
    for(let i = 1;i <= pagesCount + 1;i++)
    {
        pages.push(i);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div
                    className="card my-card-shadow d-flex justify-content-center align-items-center flex-row w-100 py-3">
                    <a onClick={() => onPageChange(1)} className="my-link">
                        <span className="fa fa-angle-double-left pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                    <a href="#" className="my-link">
                        <span className="fa fa-chevron-left pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                    {pages.map(page => (
                        <PaginationItem key={page} url={page} page={page} active={page === currentPage} onChange={onPageChange}/>
                    ))}
                    <a href="#" className="my-link">
                        <span className="fa fa-chevron-right pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                    <a onClick={() => onPageChange(pages.length)} className="my-link">
                        <span className="fa fa-angle-double-right pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Pagination;

