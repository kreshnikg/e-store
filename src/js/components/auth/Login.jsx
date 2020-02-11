import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Login = (props) => {

    let [error, setError] = useState(null);

    let email = React.createRef();
    let password = React.createRef();
    let btnLogin = React.createRef();

    const loginRequest = () => {
        let emailValue = email.current.value;
        let passwordValue = password.current.value;

        if (!emailValue || !passwordValue) {
            console.log("zbrazt");
            return;
        }
        setError(null);
        axios.post('/api/login', {email: emailValue, fjalkalimi: passwordValue})
            .then((response) => {
                if (response.data === "success")
                    window.location.href = "/";
            }).catch((error) => {
            if (error.response.status === 422) {
                setError(error.response.data)
            }
        })
    };

    const onEnter = (e) => {
        if (e.key === "Enter")
            btnLogin.current.click();
    };

    let errorMessage = <div className="alert alert-danger" role="alert">
        {error}
    </div>;

    return (
        <div className="container">
            <div className="row">
                <div className="card overflow-hidden my-card-shadow mx-auto my-5 w-75">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"/>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="h4 mb-4">Mirë se erdhët!</h4>
                                    </div>
                                    {error && errorMessage}
                                    <input ref={email} type="email" className="form-control mb-3 login-input"
                                           placeholder="Email" required/>
                                    <input onKeyUp={(e) => onEnter(e)} ref={password} type="password"
                                           className="form-control mb-3 login-input"
                                           placeholder="Fjalkalimi" required/>
                                    <div className="form-group form-check">
                                        <input type="checkbox" id="check" className="form-check-input"/>
                                        <label className="form-check-label" htmlFor="check">Më mbaj në mend</label>
                                    </div>
                                    <button ref={btnLogin} type="button" onClick={loginRequest}
                                            className="btn btn-block login-btn my-btn-primary-color">Kyçu
                                    </button>
                                    <hr/>
                                    <div className="text-center">
                                        <Link className="small" style={{textDecoration: "none", color: "#9c68aa"}}
                                              to="/register">Nuk keni llogari? Regjistrohuni këtu!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
