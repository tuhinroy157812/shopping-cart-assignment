import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';


toast.configure()

function Header(props) {

 const loginUser=() => {
    if(localStorage.getItem("user")==null){
      toast.warning("Please Login First!!!");
    }
}

const Logout=()=>{
  localStorage.clear();
}

    return (
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
      <img src="./img/logo.png" className="img-fluid logo" alt="logo"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse font-weight-bold" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item" onClick={loginUser}>
        <Link className="nav-link" to={`${localStorage.getItem("user")==null ?"/":"/home"}`}>Home</Link>
      </li>
      <li className="nav-item" onClick={loginUser}>
        <Link className="nav-link" to={`${localStorage.getItem("user")==null ?"/":"/Products"}`}>Products</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item" onClick={Logout}>
        <Link className="nav-link" to="/">{localStorage.getItem("user")!=null?"Logout" : "Signin"}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
    </ul>
    <br />
    <div className="header-cart" data-toggle="modal" data-target="#exampleModalLong"><FaCartPlus/>&nbsp;0 Items</div>
  </div>
  <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog h-100" role="document">
    <div className="modal-content h-100">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">My Cart (items)</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Cart />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary w-100 checkout-btn"><span className="float-left">Proceed to checkout</span> <span className="float-right">Rs.187 &nbsp; {`>`}</span></button>
      </div>
    </div>
  </div>
</div>
</nav>
    )
}

export default Header;
