import React from 'react';

const spinner = ({ loading }) => {

    return (
        loading ?
            <div className="loading-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> : null
    )
};

export default spinner;
