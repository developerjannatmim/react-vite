import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "./TestimonialBox";
//Assets
import ParentOne from '../../assets/img/parents/parent-1.jpg';
import ParentTwo from '../../assets/img/parents/parent-2.jpg';
import ParentThree from '../../assets/img/parents/parent-3.jpg';

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
          />
            <div className="d-flex align-items-center mt-4">
              <img
                className="rounded-circle"
                src={ParentOne}
                alt="Image"
                width='60px'
                height='60px'
              />
              <div className="pl-3">
                <h5>Parent Name</h5>
                <i>Profession</i>
              </div>
            </div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
          />
          <div className="d-flex align-items-center mt-4">
            <img
              className="rounded-circle"
              src={ParentTwo}
              width='60px' 
              height='60px'
              alt="Image"
            />
            <div className="pl-3">
              <h5>Parent Name</h5>
              <i>Profession</i>
            </div>
          </div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
          />
          <div className="d-flex align-items-center mt-4">
            <img
              className="rounded-circle"
              src={ParentThree}
              width='60px' 
              height='60px'
              alt="Image"
            />
            <div className="pl-3">
              <h5>Parent Name</h5>
              <i>Profession</i>
            </div>
          </div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
