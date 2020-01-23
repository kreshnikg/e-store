import React from 'react';

const Pagination = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div
                    className="card my-card-shadow d-flex justify-content-center align-items-center flex-row w-100 py-3">
                    <a href="#" className="my-link">
                        <span className="fa fa-angle-double-left pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                    <a href="#" className="my-link">
                        <span className="fa fa-chevron-left pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                    {props.children}
                    <a href="#" className="my-link">
                        <span className="fa fa-chevron-right pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                    <a href="#" className="my-link">
                        <span className="fa fa-angle-double-right pagination-item" style={{fontSize: "13px"}}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Pagination;
