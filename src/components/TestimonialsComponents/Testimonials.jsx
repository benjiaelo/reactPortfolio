import React from "react";

import "./testimonials.css";
import atr1 from "../../assets/avatar1.jpg";
import atr2 from "../../assets/avatar2.jpg";
import atr3 from "../../assets/avatar3.jpg";
import atr4 from "../../assets/avatar4.jpg";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container mySwiper"
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={atr1} />
          </div>
          <h5 className="client__name">Nana Adjoa</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nihil
            hic illum esse aperiam eveniet cumque explicabo, consectetur, ab
            quod animi. Rem explicabo provident sequi quibusdam eligendi magni
            sapiente officiis!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={atr2} />
          </div>
          <h5 className="client__name">Zidan Yusif</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nihil
            hic illum esse aperiam eveniet cumque explicabo, consectetur, ab
            quod animi. Rem explicabo provident sequi quibusdam eligendi magni
            sapiente officiis!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={atr3} />
          </div>
          <h5 className="client__name">King Promise</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nihil
            hic illum esse aperiam eveniet cumque explicabo, consectetur, ab
            quod animi. Rem explicabo provident sequi quibusdam eligendi magni
            sapiente officiis!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={atr4} />
          </div>
          <h5 className="client__name">Horrors</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nihil
            hic illum esse aperiam eveniet cumque explicabo, consectetur, ab
            quod animi. Rem explicabo provident sequi quibusdam eligendi magni
            sapiente officiis!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
