import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Catagories from '../server/categories/index.get';
import Banners from '../server/banners/index.get.json';
import Header from './Header';

function Home(props) {
    const [catagory, setCatagory] = useState()

    useEffect(() => {
        getCatagory();
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

    const selectedCatagory=(data)=>{
     props.history.push({
         pathname: '/products',
         state: { detail: data }
        })
    }

    return (
        <>
            <Header />
            <div className="slide-container" style={{ height: "400px" }}>
                <Slide>
                    {
                        Banners && Banners.map((items, i) => {
                            return (
                                <div className="each-slide" key={items.id}>
                                    <div style={{ 'backgroundImage': `url(${items.bannerImageUrl})`, height: "300px", backgroundSize: "cover" }}></div>
                                </div>
                            )

                        })
                    }
                </Slide>
            </div>
            <div className="container">
                {
                    catagory && catagory.map((catagories, i) => {
                        return (
                            <div className="row my-5 cata" key={catagories.id}>
                                <div className={`col-4 ${i % 2 == 0 ? "order-1" : "order-2"}`}>
                                    <img src={catagories.imageUrl} className="img-fluid d-flex m-auto justify-content-center" alt={catagories.name} />
                                </div>
                                <div className={`col-8 text-center ${i % 2 == 0 ? "order-2" : "order-1"}`}>
                                    <p className="font-weight-bold">{catagories.name}</p>
                                    <p>{catagories.description}</p>
                                    <button className="btn btn-danger" onClick={()=>selectedCatagory(catagories)}>{`Explore ${catagories.name}`}</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home;
