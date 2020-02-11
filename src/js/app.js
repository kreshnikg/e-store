import React from "react";
import ReactDom from "react-dom";
import App from "./components/root/App";
import Guest from "./components/root/Guest";
import Dashboard from "./components/root/Dashboard";

window.$ = window.jQuery = require('jquery');
require("bootstrap");
require("./custom.js");
window.axios = require("axios");
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};


function Render(Element,id){
    if(document.getElementById(id))
        ReactDom.render(<Element />, document.getElementById(id));
}

Render(App, 'root');
Render(Guest, 'guest');
Render(Dashboard, 'dashboard');

