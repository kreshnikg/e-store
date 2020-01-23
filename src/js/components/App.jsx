import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "./layouts/MainLayout";

import Index from "./Index";
import Products from "./Products";

const App = (props) => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Router>
            <Layout loggedIn>
                <Switch>
                    <Route exact path='/' onChange={scrollToTop} component={Index} />
                    <Route exact path='/kompjutere' component={Products} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
