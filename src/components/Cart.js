import React, { useState, useEffect } from 'react'
import { FaPlusCircle, FaTimes, FaMinusCircle } from "react-icons/fa";
import { connect } from 'react-redux';

function Cart(props) {

    const [storeData, setStoreData] = useState()

    useEffect(() => {
        setStoreData(props.products)
        props.latestProduct(storeData)
    }, [props.products, storeData])

    const increase = (inc) => {
        const getIndex = storeData.findIndex(x => x.id == inc.id)
        storeData[getIndex].quantity = inc.quantity + 1;
        setStoreData([...storeData])
    }

    const decrement = (desc) => {
        if (desc.quantity > 1) {
            const getIndex = storeData.findIndex(x => x.id == desc.id)
            storeData[getIndex].quantity = desc.quantity - 1;
            setStoreData([...storeData])
        }
    }

    const remove = (id) => {
        const removeItem = storeData.filter(x => x.id !== id)
        setStoreData([...removeItem])
        if (removeItem.length == 0) {
            props.emptyStore([])
        }
        else {
            props.latestProduct(removeItem)
        }
    }

    return (
        <div className="container">
            {
                storeData && storeData.length > 0 ? storeData.map((item) => {
                    return (
                        <div className="row cart-item-img mb-3" key={item.id}>
                            <span className="remove" onClick={() => remove(item.id)}><FaTimes /></span>
                            <div className="col-2 m-auto">
                                <img src={item.imageURL} className="img-fluid w-100" alt="items" />
                            </div>
                            <div className="col-10">
                                <p>{item.name}</p>
                                <p><span className="icons" onClick={() => decrement(item)}><FaMinusCircle /></span> {item.quantity} <span className="icons" onClick={() => increase(item)}><FaPlusCircle /></span>&nbsp; &nbsp; <span className="times"><FaTimes /> Rs.{item.price}</span> <span className="float-right">Rs.{item.quantity * item.price}</span></p>
                            </div>
                        </div>
                    )
                })
                    :
                    <div className="text-center m-auto">
                        <h5 className="font-weight-bold">No items in your cart</h5>
                        <p>Your favourite items are just a click away</p>
                    </div>
            }
            {
                props.products != undefined && props.products.length > 0 ?
                    <div className="row cart-item-img">
                        <div className="col-12">
                            <p className="text-center mb-0">You won't find it cheaper anywhere</p>
                        </div>
                    </div>
                    :
                    <></>
            }

        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.currentproducts
    }
}
function mapDispatchToProps(dispatch) {
    return {
        latestProduct: (latest) => { dispatch({ type: "CART_ITEMS", payload: latest }) },
        emptyStore: (empty) => { dispatch({ type: "EMPTY_ITEM", payload: empty }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
