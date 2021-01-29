import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Login(props) {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    
   const login=()=>{
       if(email!="" && password !=""){
       var result =  validateEmail(email);
       if(result == true){
        localStorage.setItem('user', email);
        props.history.push("/home");
       }else{
        toast.error("Not a valid email");   
       }
       } 
       else{
        toast.error("Mandatory fields can not be blank");
       }
   }

   function validateEmail(email) 
        {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

    return (
        <div>
            <Header />
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h4 className="font-weight-bold">Login</h4>
                        <p className="font-weight-bold">Get asscess to your Orders, Wishlists and Recommendations</p>
                    </div>
                    <div className="col-md-6 login-form">
                        <form>
                            <div className="form-group emailGroup">
                                <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" onChange={e => setEmail(e.target.value)} />
                                <label for="exampleInputEmail1" className="emaillabel">Email</label>
                            </div>
                            <div className="form-group passwordGroup">
                                <input type="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Your password" onChange={e => setPassword(e.target.value)}/>
                                <label for="exampleInputPassword1" className="passwordlabel">Password</label>
                            </div>
                            <button type="button" className="btn btn-primary w-100 login-btn" onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
