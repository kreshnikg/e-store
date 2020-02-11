import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/Dashboard/Layout";
import ScrollToTop from "../utils/ScrollToTop";

import Index from "../dashboard/Index";
import Users from "../dashboard/Users";
import Products from "../dashboard/Products";

const App = (props) => {
    return (
        <Router basename="/dashboard">
            <Layout>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/users' component={Users} />
                    <Route exact path='/products' component={Products} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
