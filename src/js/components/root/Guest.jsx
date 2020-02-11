import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Layout from "../layouts/MainLayout";

import Index from "../Index";
import Products from "../Products";
import Login from "../auth/Login";
import Register from "../auth/Register";
import NotFound from "../NotFound";
import Payment from "../Payment";

import ScrollToTop from "../utils/ScrollToTop";

class ReactClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.handler = this._handler.bind(this);
    }

    _handler(){
        this.setState({
            count: this.state.count + 1
        })
    };

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => {
            console.log("[ReactClass] count: ",this.state.count);
        },2000)
    }

    render(){
        return(
            <button onClick={this.handler}>{this.state.count}</button>
        )
    }
}

const ReactHook = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            console.log("[ReactHook] count: ",count);
        },2000)
    },[count]);

    const handler = () => {
        setCount(count + 1);
    };

    return(
        <button onClick={handler}>{count}</button>
    )
};

const Guest = (props) => {
    return (
        <Router>
            <Layout>
                <ScrollToTop />
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/kompjutere' component={Products} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/class' component={ReactClass} />
                    <Route exact path='/hook' component={ReactHook} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </Layout>
        </Router>
    )
};

export default Guest;
