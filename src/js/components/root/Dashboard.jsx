import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/Dashboard/Layout";
import ScrollToTop from "../utils/ScrollToTop";

import Index from "../dashboard/Index";
import UsersIndex from "../dashboard/users/Index";
import ProductsIndex from "../dashboard/products/Index";

const App = (props) => {
    return (
        <Router basename="/dashboard">
            <Layout>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/users' component={UsersIndex} />
                    <Route exact path='/products' component={ProductsIndex} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
