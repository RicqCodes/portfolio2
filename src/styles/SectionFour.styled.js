import styled from "styled-components";

import { Section } from "./SectionOne.styled";

export const InnerContent = styled.div`
  @media (max-width: 1500px) {
    ${Section} & {
      max-width: unset;
      padding: 0 calc(6rem - 2rem);
    }
  }

  @media (min-aspect-ratio: 1440 / 900) {
    ${Section} & {
      margin-top: 4.2rem;
    }
  }

  ${Section} & {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-height: "676px") {
    /* margin-bottom: -14rem; */
  }
`;

export const Lanes = styled.div`
  @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
    ${Section} ${InnerContent} & {
      min-height: 60.5rem;
    }
  }

  ${Section} ${InnerContent} & {
    width: 100%;
    display: flex;
    background-color: #fff;
  }
`;

export const Lane = styled.div`
  padding: 8rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 5rem;
    border: 1px solid #9a1750;
    background: linear-gradient(to right, #9a1750 50%, white 50%);

    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;

    p {
      text-align: center;
      justify-items: center;
      color: #9a1750;
      font-size: 1.5rem;
      letter-spacing: 0.2rem;
      font-weight: 500;
      transition: all 0.6s ease-out;
    }

    &:hover {
      background-position: left bottom;

      p {
        color: #fff;
      }
    }
  }
`;

export const Article = styled.div`
  margin-top: 4rem;
  text-align: left;
  position: relative;
  margin-bottom: 8.5rem;
`;

export const Content = styled.div`
  position: relative;

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secondaryColor};
    max-width: 32vw;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  p {
    width: 32vw;
    line-height: 1.2;
    font-size: 1.6em;
    letter-spacing: 0.02em;
    margin: 2rem 0;
    color: #727170;
  }
`;
