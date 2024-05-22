import React from "react";
import { styled } from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow from "../../assets/ic_arrow.png";
import MovieItem from "./MovieItem";

// 캐러셀 컴포넌트
const Carousel = ({ title, movies }) => {
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <Prev {...props}>
      <img src={arrow} alt="pre-arrow" />
    </Prev>
  );

  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <Next {...props}>
      <img src={arrow} alt="next-arrow" />
    </Next>
  );

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <SubTitle>{title}</SubTitle>
      <StyledSlider {...settings}>
        {movies.map((el) => {
          return (
            <div key={el.id} className="slide">
              <MovieItem id={el.id} image={el.large_cover_image} />
            </div>
          );
        })}
      </StyledSlider>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 24px 0;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 700;

  margin-bottom: 8px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1250px;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const Prev = styled.div`
  img {
    width: 30px;
  }
`;

const Next = styled.div`
  img {
    width: 30px;
  }
  rotate: 180deg;
`;
