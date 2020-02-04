import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layouts/Dashboard/Layout";

import Index from "../dashboard/Index";

const App = (props) => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
