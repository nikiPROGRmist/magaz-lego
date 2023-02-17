import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

export const Sliders = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <div className="slider-one ">
            <button className="slider__btn-one">Каталог</button>
          </div>
        </div>
        <div className="slider-two">
          <button className="slider__btn-two">Каталог</button>
        </div>
        <div className="slider-free ">
          <button className="slider__btn-free">Show now</button>
        </div>
      </Slider>
    </div>
  );
};
