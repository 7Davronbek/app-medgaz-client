import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const Header = ({ setModal }) => {

    return (
        <>
            <div className="Header">
                <div className="slider">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 5000,
                        }}

                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/images/bac_11.jpg" alt="" className="slider_img" />
                            <div className="header_box">
                                <div className="header_p">
                                    Медицинское газоснабжение
                                </div>
                                <div className="header_h">
                                    Монтаж медицинского газоснабжения
                                </div>
                                <button onClick={() => setModal(true)}> Заказать</button>
                            </div>
                            <div className="header_shadow"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/bac_22.jpg" alt="" className="slider_img" />
                            <div className="header_box">
                                <div className="header_p">
                                    Оборудование
                                </div>
                                <div className="header_h">
                                    Поставка медицинского оборудования
                                </div>
                                <button onClick={() => setModal(true)}> Заказать</button>

                            </div>
                            <div className="header_shadow"></div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/bac_33.jpg" alt="" className="slider_img" />
                            <div className="header_box">
                                <div className="header_p">
                                    Трубопровод
                                </div>
                                <div className="header_h">
                                    Монтаж медного трубопровода для медгаза
                                </div>
                                <button onClick={() => setModal(true)}> Заказать</button>
                            </div>
                            <div className="header_shadow"></div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>


        </>
    )
}

export default Header