import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Register(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRePassword] = useState("")


    const register = () => {
        if (email !== "" && password !== "" && repassword !== "" && firstName !== "" && lastName !== "") {
            var result = validateEmail(email);
            if (result == true) {
                if (password === repassword) {
                    localStorage.setItem('user', email);
                    props.history.push("/home");
                } else {
                    toast.error("Password Mismatched");
                }
            } else {
                toast.error("Not a valid email");
            }
        }
        else {
            toast.error("Mandatory fields can not be blank");
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

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
                                <input type="first" className="form-control" placeholder="First Name" id="firstname" aria-describedby="emailHelp" onChange={e => setFirstName(e.target.value)} />
                                <label htmlFor="firstname" className="emaillabel">First Name</label>
                            </div>
                            <div className="form-group">
                                <input type="last" className="form-control" placeholder="Last Name" id="lastname" aria-describedby="emailHelp" onChange={e => setLastName(e.target.value)} />
                                <label htmlFor="lastname" className="emaillabel">Last Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                                <label htmlFor="exampleInputEmail1" className="emaillabel">Email</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="exampleInputPassword1" className="passwordlabel">Password</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password" id="confirmpassword" onChange={e => setRePassword(e.target.value)} />
                                <label htmlFor="confirmpassword" className="passwordlabel">Confirm Password</label>
                            </div>
                            <button type="button" className="btn btn-primary w-100 login-btn" onClick={register}>Signup</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
