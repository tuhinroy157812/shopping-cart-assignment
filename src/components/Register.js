import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Register() {
    return (
        <div>
            <Header />
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h4 className="font-weight-bold">Signup</h4>
                        <p className="font-weight-bold">We do not share your personal details with anyone.</p>
                    </div>
                    <div className="col-md-6 login-form">
                        <form>
                            <div className="form-group">
                                <input type="first" className="form-control"  placeholder="First Name" id="firstname" aria-describedby="emailHelp" />
                                <label for="firstname" className="emaillabel">First Name</label>
                            </div>
                            <div className="form-group">
                                <input type="last" className="form-control"  placeholder="Last Name" id="lastname" aria-describedby="emailHelp" />
                                <label for="lastname" className="emaillabel">Last Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control"  placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <label for="exampleInputEmail1" className="emaillabel">Email</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control"  placeholder="Your Password" id="exampleInputPassword1" />
                                <label for="exampleInputPassword1" className="passwordlabel">Password</label>
                            </div>
                            <div className="form-group">
                                <input type="confirmpassword" className="form-control"  placeholder="Confirm Password" id="confirmpassword" />
                                <label for="confirmpassword" className="passwordlabel">Confirm Password</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 login-btn">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
