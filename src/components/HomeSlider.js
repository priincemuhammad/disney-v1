import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Contents>
        <img src="./images/slider-badag.jpg" alt="img" />
      </Contents>
      <Contents>
        <img src="./images/slider-badging.jpg" alt="img" />
      </Contents>
      <Contents>
        <img src="./images/slider-scale.jpg" alt="img" />
      </Contents>
      <Contents>
        <img src="./images/slider-scales.jpg" alt="img" />
      </Contents>
    </Carousel>
  );
};

export default HomeSlider;

const Carousel = styled(Slider)`
  padding-top: 20px;
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: #fff;
  }
  button {
    z-index: 1;
  }
`;
const Contents = styled.div`
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 5px;
    transition-duration: 300ms;
    box-shadow: var(--shadow);
    &:hover {
      border-color: var(--border-one);
    }
  }
`;
