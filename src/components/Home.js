import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Header from './Header';

function Home(props) {
    const [catagory, setCatagory] = useState()
    const [banner, setBanner] = useState()

    useEffect(() => {
        getCatagory();
        getBanners();
        window.scrollTo(0, 0)
    }, [])

    const getBanners = () => {

        fetch("http://localhost:3001/banner")
            .then(res => res.json())
            .then(data => {
                setBanner(data)
            })
    }

    const getCatagory = () => {
        fetch("http://localhost:3001/catagory")
            .then(res => res.json())
            .then(data => {
                data && data.sort((a, b) => (a.order > b.order) ? 1 : -1);
                setCatagory(data);
            })
    }

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
                {banner && banner.length != undefined ? <Slide>
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
                                <div className={`col-4 m-auto ${i % 2 == 0 ? "order-1" : "order-2"}`}>
                                    <img src={catagories.imageUrl} className="img-fluid d-flex m-auto justify-content-center" alt={catagories.name} />
                                </div>
                                <div className={`col-8 text-center ${i % 2 == 0 ? "order-2" : "order-1"}`}>
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
