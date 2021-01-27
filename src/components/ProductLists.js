import React,{useState,useEffect} from 'react';
import products from '../server/products/index.get';

function ProductLists(props) {
    const [selectedItem,setSelectedItem]  =useState()

useEffect(()=>{
    setSelectedItem(props.id ? props.id : props.selectedItem ? props.selectedItem :"")
},[props])

    return (
        <div className="row">
            {
                products && products.map((prod, i) => {
                    return (
                        selectedItem && selectedItem == prod.category?
                        <>
                        <div className="col-md-3 col-12 items my-3" key={prod.id}>
                            <div className="row">
                                <div className="col-12">
                                    <p className="product-name">{prod.name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-6 my-2">
                                    <img src={prod.imageURL ? prod.imageURL:""} className="w-100 img-fluid" alt={prod.sku} />
                                </div>
                                <div className="col-md-12 col-6 m-auto">
                                    <p className="product-disc product-desc">{prod.description}</p>
                                    <div className="d-flex">
                                        <p className="mb-0 d-md-flex align-items-center d-sm-none">MRP Rs.{prod.price}</p>
                                        <button type="button" className="btn btn-danger ml-auto w-md-50 d-md-block d-sm-none">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-sm-block d-none d-md-none my-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-danger ml-auto w-100">Buy Now @ Rs.87</button>
                                </div>
                            </div>
                        </div>
                        </>
                        :
                        selectedItem ==""?
                        <>
                         <div className="col-md-3 col-12 items my-3" key={prod.id}>
                            <div className="row">
                                <div className="col-12">
                                    <p className="product-name">{prod.name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-6 my-2">
                                    <img src={prod.imageURL ? prod.imageURL:""} className="w-100 img-fluid" alt={prod.sku} />
                                </div>
                                <div className="col-md-12 col-6 m-auto">
                                    <p className="product-disc product-desc">{prod.description}</p>
                                    <div className="d-flex">
                                        <p className="mb-0 d-md-flex align-items-center d-sm-none">MRP Rs.{prod.price}</p>
                                        <button type="button" className="btn btn-danger ml-auto w-md-50 d-md-block d-sm-none">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-sm-block d-none d-md-none my-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-danger ml-auto w-100">Buy Now @ Rs.87</button>
                                </div>
                            </div>
                        </div>
                        </>
                        :
                        <></>
                    )
                })
            }

        </div>
    )
}

export default ProductLists
