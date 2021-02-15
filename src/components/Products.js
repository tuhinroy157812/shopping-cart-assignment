import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Header from './Header';
import ProductList from './ProductLists';
import {fetchMenuDetails} from '../action/productAction.js';

function Products(props) {
    const [selectedItem,setSelectedItem]  = useState();
    const [id,setId] = useState();
    const dispatch = useDispatch();

    const menu = useSelector( store=> store.reducer.menu)

    useEffect(() => {
        setSelectedItem(props.location.state && props.location.state.detail.id && props.location.state.detail.id)
        window.scrollTo(0, 0)
        dispatch(fetchMenuDetails())
    }, [])

    const getMenu=(catagoryid)=>{
        setSelectedItem()
        if(catagoryid === id){
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
                                    menu && menu.map((catagories) => {
                                        return (
                                            <li className={`my-1 ${id === catagories.id ? "font-weight-bold" : ((selectedItem === catagories.id)&& id===undefined)? "font-weight-bold":""} menu`} key={catagories.id} onClick={()=>getMenu(catagories.id)}>{catagories.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </aside>
                    </div>
                    <div className="col-12 d-md-none d-block my-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            {
                                menu && menu.map((catagories) => {
                                    return (
                                        <option className={`my-1 ${id === catagories.id ? "font-weight-bold" : ((selectedItem === catagories.id)&& id===undefined)? "font-weight-bold":""} menu`} key={catagories.id} onClick={()=>getMenu(catagories.id)}>{catagories.name}</option>
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
