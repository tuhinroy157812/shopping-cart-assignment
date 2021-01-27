import React from 'react'
import { FaPlusCircle, FaTimes } from "react-icons/fa";
function Cart() {
    return (
        <div className="container">
            <div className="row cart-item-img mb-3">
                <div className="col-2 m-auto">
                    <img src="http://placehold.jp/150x150.png" className="img-fluid" alt="items" />
                </div>
                <div className="col-10">
                    <p>Apple - Washington, Regular, 4 pcs</p>
                    <p><FaPlusCircle /> 1 <FaPlusCircle />&nbsp; &nbsp; <span className="times"><FaTimes /> Rs.187</span> <span className="float-right">Rs.187</span></p>
                </div>
            </div>
        
            <div className="row cart-item-img">
                <div className="col-12">
                    <p className="text-center mb-0">You won't find it cheaper anywhere</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
