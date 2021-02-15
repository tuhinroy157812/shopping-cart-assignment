import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Header from './Header';
import { fetchBannerDetails, fetchCategoriesDetails } from '../action/homeAction';

function Home(props) {
    const banner = useSelector(store => store.reducer.bannerItems)
    const catagory = useSelector(store => store.reducer.catagories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBannerDetails())
        dispatch(fetchCategoriesDetails())
        window.scrollTo(0, 0)
    }, [])

    const selectedCatagory = (data) => {
        props.history.push({
            pathname: '/products',
            state: { detail: data }
        })
    }

    return (
        <>
            <Header />
            <div className="slide-container" style={{ height: "400px" }}>
                {banner && banner.length !== undefined ? <Slide>
                    {
                        banner && banner.map((items, i) => {

                            return (
                                <div className="each-slide" key={items.id}>
                                    <div style={{ 'backgroundImage': `url(${items.bannerImageUrl})`, height: "300px", backgroundSize: "cover" }}></div>
                                </div>
                            )

                        })

                    }
                </Slide>
                    :
                    <></>
                }
            </div>
            <div className="container">
                {
                    catagory && catagory.map((catagories, i) => {
                        return (
                            <div className="row my-5 cata" key={catagories.id}>
                                <div className={`col-md-4 col-5 m-auto ${i % 2 === 0 ? "order-1" : "order-2"}`}>
                                    <img src={catagories.imageUrl} className="img-fluid d-flex m-auto justify-content-center" alt={catagories.name} />
                                </div>
                                <div className={`col-md-8 col-7 text-center product-desc-btn m-md-auto ${i % 2 === 0 ? "order-2" : "order-1"}`}>
                                    <p className="font-weight-bold">{catagories.name}</p>
                                    <p>{catagories.description}</p>
                                    <button className="btn btn-danger" onClick={() => selectedCatagory(catagories)}>{`Explore ${catagories.name}`}</button>
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
