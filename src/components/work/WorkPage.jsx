import React from "react";
import styled from "styled-components";
import Card from "./molecules/Card";
import { projects } from "./molecules/projectData";

const WorkPage = () => {
  return (
    <WorkContainer>
      <InnerContent>
        <Title>
          <h1>Work so far...</h1>
          <p>Some projects i have worked on so far</p>
        </Title>
        <CardContainer>
          {projects.map((project) => {
            return <Card cardDetails={project} />;
          })}
        </CardContainer>
      </InnerContent>
    </WorkContainer>
  );
};

export default WorkPage;

const WorkContainer = styled.div`
  width: 100%;
  margin-top: calc(160px + 68px);
  padding: 24px;
  scroll-snap-align: none;
  min-height: 100vh;
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 64px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-align: center;

  h1 {
    font-weight: 700;
  }
`;

const CardContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
