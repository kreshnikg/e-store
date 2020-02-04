import React, {Fragment} from 'react';

const MainLayout = (props) => {
    return (
        <Fragment>
            <div className="content">
                {props.children}
            </div>
        </Fragment>
    )
};

export default MainLayout;
