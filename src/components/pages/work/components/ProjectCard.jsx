import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/work/${data.projectName}`}>
      <CardContainer>
        <ProjectLogo>
          <img src={data.projectLogo} alt="project Logo" />
        </ProjectLogo>
        <ProjectName>
          <h5>{data.projectName}</h5>
          <a href={data.liveLink}>{data.liveLink}</a>
        </ProjectName>
      </CardContainer>
    </Link>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: 32rem;
  cursor: pointer;
  box-shadow: 0px 8px 6px -6px rgba(215, 162, 185, 0.09);
  transition: all 0.3s ease-in;

  @media (hover: hover) and (any-pointer: fine) {
    &:hover {
      box-shadow: 12px 8px 6px -6px rgba(215, 162, 185, 0.09);
      transform: translateY(-8px);
    }
  }

  @media (max-width: 459px) {
    /* width: 100%; */
  }
`;

const ProjectLogo = styled.div`
  height: 65%;
  background-color: #f5e8ee;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
`;

const ProjectName = styled.div`
  height: 35%;
  background-color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  /* color: #ae4573; */
  color: #000;

  h5 {
    font-size: 2.4rem;
  }

  a:link,
  a:visited {
    font-size: 1.8rem;
    color: #6b17e6;
  }
`;
