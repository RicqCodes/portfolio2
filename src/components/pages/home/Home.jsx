import React, { Fragment, useRef } from "react";
import styled from "styled-components";

import Header from "../../Header";
import SectionOne from "./Section/SectionOne";
import SectionTwo from "./Section/SectionTwo";
import SectionThree from "./Section/SectionThree";
import SectionFour from "./Section/SectionFour";
import SectionFive from "./Section/SectionFive";
import Footer from "../../Footer";
import Nav from "../../Nav";

import useIntersecton from "../../../hooks/useIntersection";

const Home = () => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const { isIntersecting: inVP1, current: element1 } = useIntersecton(
    section1,
    "-10%"
  );
  const { isIntersecting: inVP2, current: element2 } = useIntersecton(
    section2,
    "-20%"
  );

  const { isIntersecting: inVP3, current: element3 } = useIntersecton(
    section3,
    "-20%"
  );

  const { isIntersecting: inVP4, current: element4 } = useIntersecton(
    section4,
    "-20%"
  );

  const { isIntersecting: inVP5, current: element5 } = useIntersecton(
    section5,
    "-20%"
  );

  const scrollTo = (section) => {
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <Header
        scrollTo={scrollTo}
        element1={element1}
        element2={element2}
        element3={element3}
        element4={element4}
        element5={element5}
        inVP1={inVP1}
        inVP2={inVP2}
        inVP3={inVP3}
        inVP4={inVP4}
        inVP5={inVP5}
      />
      <Main tabIndex="1">
        <Nav
          scrollTo={scrollTo}
          element1={element1}
          element2={element2}
          element3={element3}
          element4={element4}
          element5={element5}
          inVP1={inVP1}
          inVP2={inVP2}
          inVP3={inVP3}
          inVP4={inVP4}
          inVP5={inVP5}
        />
        <SectionOne
          ref={section1}
          element1={element1}
          element2={element2}
          element3={element3}
          element4={element4}
          element5={element5}
          inVP1={inVP1}
          inVP2={inVP2}
          inVP3={inVP3}
          inVP4={inVP4}
          inVP5={inVP5}
        />
        <SectionTwo ref={section2} current2={element2} inVP2={inVP2} />
        <SectionThree ref={section3} current3={element3} inVP3={inVP3} />
        <SectionFour ref={section4} current4={element4} inVP4={inVP4} />
        <SectionFive ref={section5} current5={element5} inVP5={inVP5} />
        <Footer />
      </Main>
    </Fragment>
  );
};

export default Home;

const Main = styled.main`
  :focus {
    outline: none;
  }

  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 701px) {
    touch-action: none;
  }
`;
