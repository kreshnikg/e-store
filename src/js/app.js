import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Guest from "./components/Guest";

window.$ = window.jQuery = require('jquery');
require("bootstrap");
require("./custom.js");
window.axios = require("axios");

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

if(document.getElementById('root'))
    ReactDom.render(<App/>, document.getElementById('root'));

if(document.getElementById('guest'))
    ReactDom.render(<Guest/>, document.getElementById('guest'));
