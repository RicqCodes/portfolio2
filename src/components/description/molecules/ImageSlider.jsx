import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import { FaBeer } from "react-icons/fa";
// import {
//   BsFillBackspaceFill,
//   BsFillBackspaceReverseFill,
// } from "react-icons/bs";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const trackRef = useRef(null);
  const slideWidth =
    trackRef.current?.children[0]?.getBoundingClientRect().width || 0;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;
  const intervalIdRef = useRef(null);

  const handleDragStart = (e) => {
    isDragging = true;
    startPos = e.clientX;
    clearInterval(intervalIdRef.current);
  };

  const handleDragEnd = () => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }

    if (movedBy > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setTrackPosition();
    setAutoplay(true);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const currentPosition = e.clientX;
      currentTranslate = prevTranslate + currentPosition - startPos;
      setTrackPosition();
    }
  };

  const setTrackPosition = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervalIdRef.current = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
      }, 10000);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [autoplay, currentSlide, images.length]);

  //   const handlePrevClick = () => {
  //     if (currentSlide > 0) {
  //       setCurrentSlide(currentSlide - 1);
  //     } else {
  //       setCurrentSlide(images.length - 1);
  //     }
  //     setAutoplay(false);
  //   };

  //   const handleNextClick = () => {
  //     if (currentSlide === images.length - 1) {
  //       setCurrentSlide(0);
  //     } else {
  //       setCurrentSlide(currentSlide + 1);
  //     }
  //     setAutoplay(false);
  //   };

  return (
    <ImageSliderContainer>
      <InnerContainer>
        {/* <ArrowLeft>
          <BsFillBackspaceFill onClick={handlePrevClick} />
        </ArrowLeft> */}
        <ImageContainer
          ref={trackRef}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragMove}
          style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
        >
          {images?.map((image, i) => {
            return <img key={image} src={image} alt={`Slide ${i}`} />;
          })}
        </ImageContainer>
        {/* <ArrowRight>
          <BsFillBackspaceReverseFill onClick={handleNextClick} />
        </ArrowRight> */}
      </InnerContainer>
    </ImageSliderContainer>
  );
};

export default ImageSlider;

const ImageSliderContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  transition: all 1s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// const ArrowLeft = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: flex-start;
//   left: 80px;
//   width: 100%;
//   color: ${({ theme }) => theme.colors.secondaryColor};
// `;
// const ArrowRight = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: flex-end;
//   right: 90px;
//   width: 100%;
//   color: ${({ theme }) => theme.colors.secondaryColor};
// `;
