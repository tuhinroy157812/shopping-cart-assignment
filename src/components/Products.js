import React, { useState, useEffect } from 'react';
import Header from './Header';
import Catagories from '../server/categories/index.get';
import ProductList from './ProductLists';

function Products(props) {
    const [catagory, setCatagory] = useState();
    const [selectedItem,setSelectedItem]  = useState();
    const [id,setId] = useState();

    useEffect(() => {
        setSelectedItem(props.location.state && props.location.state.detail.id && props.location.state.detail.id)
        getCatagory();
        window.scrollTo(0, 0)
    }, [])

    const getCatagory = () => {
        Catagories.sort(function (a, b) {
            var keyA = new Date(a.order),
                keyB = new Date(b.order);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        setCatagory(Catagories);
    }

    const getMenu=(catagoryid)=>{
        setSelectedItem()
        if(catagoryid == id){
            setId()  
        }
        else{
            setId(catagoryid)
        }
    }


    return (
        <div>
            <Header/>
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <aside>
                            <ul className="side-nav pr-4">
                                {
                                    catagory && catagory.map((catagories) => {
                                        return (
                                            <li className={`my-1 ${id == catagories.id ? "font-weight-bold" : ((selectedItem == catagories.id)&& id==undefined)? "font-weight-bold":""} menu`} key={catagories.id} onClick={()=>getMenu(catagories.id)}>{catagories.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </aside>
                    </div>
                    <div className="col-12 d-md-none d-block my-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            {
                                catagory && catagory.map((catagories) => {
                                    return (
                                        <option className={`my-1 ${id == catagories.id ? "font-weight-bold" : ((selectedItem == catagories.id)&& id==undefined)? "font-weight-bold":""} menu`} key={catagories.id} onClick={()=>getMenu(catagories.id)}>{catagories.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-9 col-12">
                        <ProductList 
                        {...props}
                        selectedItem={selectedItem}
                        id={id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products;
