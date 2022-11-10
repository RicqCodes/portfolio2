import styled from "styled-components";

import { Section } from "./SectionOne.styled";

export const InnerContent = styled.div`
  @media (min-width: 701px) {
    ${Section} & {
      margin-top: 5.5vh;
      /* align-items: center; */
    }
  }

  ${Section} & {
    justify-content: space-between;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 701px) {
    ${Section} & {
      padding: 0 10rem;
    }
  }

  ${Section} & {
    width: 100%;
    display: flex;
  }
`;

export const Article = styled.article`
  text-align: left;
  position: relative;
`;

export const Content = styled.div`
  position: relative;

  @media (min-width: 701px) {
    ${Section} ${InnerContent} ${Article} & h1 {
      max-width: 27.6vw;
    }
  }

  @media (min-width: 701px) {
    & h1 {
      max-width: 30vw;
      transition-delay: 200ms;
    }
  }

  @media (min-width: 701px) {
    & p {
      width: 27vw;
      max-width: 701px;
      font-size: 1.4rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      transition-delay: 310ms;
    }
  }

  & p,
  & h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  & p {
    color: #fff;
  }

  & h1 {
    font-size: 5rem;
    margin: 0.67em 0;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Figure = styled.figure`
  @media (min-width: 701px) {
    ${Section} & {
      /* width: 66.2rem; */
      max-width: 100%;
      display: flex;
      align-items: flex-start;
      margin-top: 10rem;
    }
  }
`;
