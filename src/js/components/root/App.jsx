import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/MainLayout";

import Index from "../Index";
import Products from "../Products";
import usePath from "../usePath";

const App = (props) => {

    const path = usePath();
    useEffect(() => {
        window.scrollTo(0,0);
        console.log(path);
    },[path]);

    return (
        <Router>
            <Layout loggedIn>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/kompjutere' component={Products} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
