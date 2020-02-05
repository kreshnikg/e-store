import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/MainLayout";

import Index from "../Index";
import Products from "../Products";
import useScrollToTop from "../utils/useScrollToTop";

const Routes = (props) => {
    useScrollToTop();
    return (
        <>
            <Route exact path='/' component={Index}/>
            <Route exact path='/kompjutere' component={Products}/>
        </>
    )
};

const App = (props) => {
    return (
        <Router>
            <Layout loggedIn>
                <Switch>
                    <Routes/>
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
