import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Register = (props) => {

    let [error, setError] = useState(null);
    let emri = React.createRef();
    let mbiemri = React.createRef();
    let email = React.createRef();
    let password = React.createRef();

    const registerRequest = () => {
        let emriValue = emri.current.value;
        let mbiemriValue = mbiemri.current.value;
        let emailValue = email.current.value;
        let passwordValue = password.current.value;

        // if(!emailValue || !passwordValue || !emriValue || !mbiemriValue){
        //     console.log("zbrazt");
        //     return;
        // }

        setError(null);
        axios.post('/api/register', {
            emri: emriValue,
            mbiemri: mbiemriValue,
            email: emailValue,
            fjalkalimi: passwordValue
        }).then((response) => {
            if (response.data === "success")
                window.location.href = "/";
            else if (error.response.status === 422) {
                setError(error.response.data)
            }
        })
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
                                    <div className="row">
                                        <div className="col-6">
                                            <input ref={emri} type="text" className="form-control mb-3 login-input"
                                                   placeholder="Emri" required/>
                                        </div>
                                        <div className="col-6">
                                            <input ref={mbiemri} type="text"
                                                   className="form-control mb-3 login-input"
                                                   placeholder="Mbiemri" required/>
                                        </div>
                                    </div>
                                    <input ref={email} type="text" className="form-control mb-3 login-input"
                                           placeholder="Email"
                                           required/>
                                    <div className="row">
                                        <div className="col-6">
                                            <input ref={password} type="password"
                                                   className="form-control mb-3 login-input"
                                                   placeholder="Fjalkalimi" required/>
                                        </div>
                                        <div className="col-6">
                                            <input type="password" className="form-control mb-3 login-input"
                                                   placeholder="Konfirmo fjalkalimin" required/>
                                        </div>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" id="check" className="form-check-input"/>
                                        <label className="form-check-label" htmlFor="check">* Termat dhe kushtet e
                                            përdorimit</label>
                                    </div>
                                    <button type="button" onClick={registerRequest}
                                            className="btn btn-block login-btn my-btn-primary-color">Regjistrohu
                                    </button>
                                    <hr/>
                                    <div className="text-center">
                                        <Link className="small" style={{textDecoration: "none", color: "#9c68aa"}}
                                              to="login">Keni llogari? Identifikohu këtu!</Link>
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

export default Register;
