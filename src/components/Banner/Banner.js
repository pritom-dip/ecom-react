import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './Banner.css'
import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const Banner = () => {

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return `<span class=${className}>${index + 1}</span>`;
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Swiper pagination={pagination} className="myslide">
                            <SwiperSlide>

                                <div className="col-lg-6">
                                    <div className="align-items-center h-100">
                                        <div className="">
                                            <h1 className="display-3">Buy From us</h1>
                                            <p className="lead">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quidem?
                                            </p>
                                            <div className="border-dark-button">
                                                <a>View All Products</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Imac_alu.png" alt="" className="w-100" />
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="col-lg-6">
                                    <div className="align-items-center h-100">
                                        <div className="">
                                            <h1 className="display-3">Vertically Centered Text</h1>
                                            <p className="lead">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quidem?
                                            </p>
                                            <div className="border-dark-button">
                                                <a>View All Products</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 ">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Imac_alu.png" alt="" className="w-100" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;