import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/MainLayout";

import Index from "../Index";
import Products from "../Products";
import ScrollToTop from "../utils/ScrollToTop";

const App = (props) => {
    return (
        <Router>
            <Layout loggedIn>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route exact path='/kompjutere' component={Products}/>
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
