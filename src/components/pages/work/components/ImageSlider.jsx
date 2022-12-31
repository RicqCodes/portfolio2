import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ currentProject }) => {
  const [current, setCurrent] = useState(0);
  const length = currentProject.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 10000);

  return (
    <SliderContainer>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      <ImageContainer>
        {currentProject?.map((img, index) => (
          <div key={index} className={index === current ? "active" : "slide"}>
            {index === current && <img key={index} src={img} alt="" />}
          </div>
        ))}
      </ImageContainer>
    </SliderContainer>
  );
};

export default ImageSlider;

const SliderContainer = styled.section`
  width: 100%;
  position: relative;
  transition: all 0.3s ease-in;
  /* height: 80vh; */
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  left: -4.4rem;
  top: 50%;
  font-size: 3.6rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  right: -4.4rem;
  top: 50%;
  font-size: 3.6rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;

  div {
    transition: all 0.3s ease-in;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.3s ease-in;
  }
`;
