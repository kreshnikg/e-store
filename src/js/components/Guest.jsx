import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./layouts/MainLayout";

import Index from "./Index";
import Products from "./Products";
import Login from "./auth/Login";
import Register from "./auth/Register";

const Guest = (props) => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/kompjutere' component={Products} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default Guest;
