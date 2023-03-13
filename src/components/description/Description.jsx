import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../work/molecules/projectData";
import ImageSlider from "./molecules/ImageSlider";

const Description = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  return (
    <DescriptionContainer>
      <TopContainer>
        <HeadText>
          <h2>{project.name}</h2>
        </HeadText>
        <ImageSlider images={project?.img} />
        <WebLink>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.url}
          </a>
        </WebLink>
      </TopContainer>
      <BottomContainer>
        <p>{project.description}</p>
      </BottomContainer>
    </DescriptionContainer>
  );
};

export default Description;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  padding: 24px;
  margin-top: calc(160px + 24px);

  @media (max-width: 540px) {
    margin-top: 84px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const HeadText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-weight: 600;
  }
`;

const WebLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 18px;
    color: blue;
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`;
