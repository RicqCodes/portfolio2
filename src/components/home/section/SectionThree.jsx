import React from "react";

import {
  SectionThreeContainer,
  InnerContent,
  Article,
  Content,
  Figure,
} from "../../../styles/SectionThree.styled";
import portfolio from "../../../svg/portfolio.svg";
import useIntersectionContext from "../../../utils/hooks/useIntersectionContext";

const SectionThree = () => {
  const { inVP3, section3 } = useIntersectionContext();

  return (
    <SectionThreeContainer
      ref={section3}
      data-section="three"
      data-color="brown"
      tabIndex="1"
      aria-hidden={inVP3 ? "false" : "true"}
    >
      <InnerContent>
        <Article>
          <Content>
            <h1>
              Experiences
              <br />
              Last 5 Years
            </h1>
            <p>
              At Eval360, I developed and implemented the user interface and
              user experience of the software. I collaborated with the product
              and design teams to understand requirements and goals. I worked
              with the development team to ensure quality and maintainability.
            </p>
            <p>
              During my time at Dotlaunch as a Frontend & Solidity Developer, I
              was responsible for developing and examining smart contracts, as
              well as evaluating and implementing new tools and technologies.
            </p>
            <p>
              I designed and implemented React.js projects, debugged technical
              issues, and revised platform documentation during my Frontend
              Developer internship at HNG.
            </p>
            <p>
              At Hype and Coursebay, I worked as a frontend developer on
              projects that involved designing and developing user interfaces
              and user experiences using various technologies like JavaScript
              React, NextJs, RTK Query. I also collaborated with designers and
              back-end developers to ensure the projects were functional, tested
              and debugged the codebase, and deployed the projects to
              production.
            </p>
          </Content>
        </Article>
        <Figure>
          <img src={portfolio} alt="portfolio svg" />
        </Figure>
      </InnerContent>
    </SectionThreeContainer>
  );
};

export default SectionThree;
