import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

export const Sliders = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: false,
    arrows: false,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="slider-one ">
          <button className="slider__btn-one">Каталог</button>
        </div>
        <div className="slider-two"></div>
        <div className="slider-free "></div>
      </Slider>
    </div>
  );
};
