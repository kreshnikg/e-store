import React from 'react';

const Payment = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 my-5">
                        <div className="cell example example1" id="example-1">
                            <form>
                                <fieldset>
                                    <div className="custom-row">
                                        <label htmlFor="example1-name" data-tid="elements_examples.form.name_label">Name</label>
                                        <input id="example1-name" data-tid="elements_examples.form.name_placeholder" type="text"
                                               placeholder="Filan Fisteku" required="" autoComplete="name"/>
                                    </div>
                                    <div className="custom-row">
                                        <label htmlFor="example1-email" data-tid="elements_examples.form.email_label">Email</label>
                                        <input id="example1-email" data-tid="elements_examples.form.email_placeholder" type="email"
                                               placeholder="filanfisteku@gmail.com" required="" autoComplete="email"/>
                                    </div>
                                    <div className="custom-row">
                                        <label htmlFor="example1-phone" data-tid="elements_examples.form.phone_label">Phone</label>
                                        <input id="example1-phone" data-tid="elements_examples.form.phone_placeholder" type="tel"
                                               placeholder="(383) 44-123-456" required="" autoComplete="tel"/>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="custom-row">
                                        <div id="example1-card"/>
                                    </div>
                                </fieldset>
                                <button type="submit" data-tid="elements_examples.form.pay_button">Paguaj $25</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Payment;
