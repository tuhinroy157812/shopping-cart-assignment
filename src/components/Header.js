import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import Cart from './Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';

toast.configure()

function Header(props) {
  const [amount, setAmount] = useState()

  const loginUser = () => {
    if (localStorage.getItem("user") == null) {
      toast.warning("Please Login First!!!");
    }
  }

  useEffect(() => {
    let total=0;
     for(let i in props.products){
      total += props.products[i].price * props.products[i].quantity
     }
     setAmount(total)
  }, [props.products])

  const Logout = () => {
    localStorage.clear();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        <img src="./img/logo.png" className="img-fluid logo" alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse font-weight-bold" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item" onClick={loginUser}>
            <Link className="nav-link" to={`${localStorage.getItem("user") == null ? "/" : "/home"}`}>Home</Link>
          </li>
          <li className="nav-item" onClick={loginUser}>
            <Link className="nav-link" to={`${localStorage.getItem("user") == null ? "/" : "/Products"}`}>Products</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" onClick={Logout}>
            <Link className="nav-link" to="/">{localStorage.getItem("user") != null ? "Logout" : "Signin"}</Link>
          </li>
          <li className="nav-item" onClick={Logout}>
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
        <br />
        <div className="header-cart" data-toggle="modal" data-target="#exampleModalLong"><FaCartPlus />&nbsp;{props.products && props.products.length} Items</div>
      </div>
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog h-100" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">My Cart ({props.products && props.products.length} items)</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Cart />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary w-100 checkout-btn"><span className={`${props.products && props.products.length == 0 ?"text-center":"float-left"}`}>{props.products && props.products.length == 0 ? "Start Shopping" : "Proceed to checkout"}</span> <span className="float-right">{props.products == 0  ? "" : "Rs." + amount + `>`} </span></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function mapStateToProps(state){
return{
  products:state.currentproducts
}
}

export default connect(mapStateToProps)(Header);
