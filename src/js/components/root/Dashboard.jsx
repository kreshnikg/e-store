import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/Dashboard/Layout";

import Index from "../dashboard/Index";
import useScrollToTop from "../utils/useScrollToTop";

const Routes = () => {
    useScrollToTop();
    return (
        <>
            <Route exact path='/' component={Index} />
        </>
    )
};

const App = (props) => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Routes />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
