import React, { Fragment } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../../Footer";
import Header from "../../Header";
import ProjectCard from "./components/ProjectCard";
import { projectData } from "./data";

const Work = () => {
  console.log(window.location.pathname);

  useEffect(() => {
    const setBackgroundColor = () => {
      window.location.pathname === "/work" &&
        (document.body.style.backgroundColor = "#faf4f7");
    };

    setBackgroundColor();
  }, []);

  const card = projectData?.map((info) => {
    return <ProjectCard data={info} />;
  });
  return (
    <Fragment>
      <Header />
      <WorkContainer>
        <InnerContainer>
          <HeadingText>
            <h1> Works so far...</h1>
            <p>Selected projects i have worked on so far.</p>
          </HeadingText>
          <CardContainer>{card}</CardContainer>
        </InnerContainer>
      </WorkContainer>
      <Footer />
    </Fragment>
  );
};

export default Work;

const WorkContainer = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 25rem 15rem;

  @media (max-width: 1067px) {
    padding: 20rem 8rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  flex-direction: column;

  @media (max-width: 1067px) {
    width: 100%;
  }
`;

const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    color: #ae4573;
    font-weight: 600;
    line-height: 2.4rem;
  }

  p {
    font-size: 1.8rem;
    color: #ae4573;
    font-weight: 500;
    line-height: 1.8rem;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  @media (max-width: 656px) {
    align-items: center;
    justify-content: center;
  }
`;
