import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/Dashboard/Layout";

import Index from "../dashboard/Index";
import ScrollToTop from "../utils/ScrollToTop";

const App = (props) => {
    return (
        <Router>
            <Layout>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Index} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
