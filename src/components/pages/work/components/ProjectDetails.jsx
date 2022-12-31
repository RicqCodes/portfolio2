import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../../Footer";
import Header from "../../../Header";
import { projectData } from "../data";

import ImageSlider from "./ImageSlider";

const ProjectDetails = () => {
  const { projectname } = useParams();

  console.log(projectname);

  const currentProject = projectData?.find(
    (data) => data.projectName === projectname
  );

  return (
    <Fragment>
      <Header />
      <DetailsContainer>
        <InnerContainer>
          <CarouselContainer>
            <ImageSlider currentProject={currentProject.appView} />
          </CarouselContainer>
          <DescriptionText>{currentProject.description}</DescriptionText>
        </InnerContainer>
      </DetailsContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectDetails;

const DetailsContainer = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 14rem 0;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  /* align-items: center; */
  justify-content: center;
  gap: 8rem;
  flex-direction: column;
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const DescriptionText = styled.div`
  width: 80%;
  margin: auto;

  p {
    font-size: 1.8rem;
    line-height: 3.4rem;
  }

  @media (max-width: 714px) {
    width: 100%;
  }
`;
