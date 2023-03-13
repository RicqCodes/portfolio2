import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ cardDetails }) => {
  return (
    <CardContainer>
      <Link to={cardDetails.id}>
        <CardContent>
          <ImgContainer>
            <img src={cardDetails?.logo} alt={`${cardDetails.name} logo`} />
          </ImgContainer>
          <TextContent>
            <h5>{cardDetails.name}</h5>
            <p>{cardDetails.tag}</p>
          </TextContent>
        </CardContent>
      </Link>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 350px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 8px 6px -1px;
  transition: all 0.3s ease-in 0s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      img {
        scale: 1.08;
      }
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 220px;
  padding: 24px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    width: 40%;
    transition: all 0.3s ease-in 0s;
  }
`;

const TextContent = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 14px;
  height: calc(80px + 24px + 24px);
  background-color: #fff;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.secondaryColor};

  a {
    font-size: 15px;
  }
`;
