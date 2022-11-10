import styled from "styled-components";
import { Section } from "./SectionOne.styled";

export const InnerContent = styled.div`
  ${Section} & {
    flex-direction: column;
    gap: 8rem;
    padding-top: 3rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    ${Section} & {
      max-width: 1500px;
    }
  }

  @media (min-width: 701px) {
    ${Section} & {
      padding: 0 14.4rem;
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

  ${Section} ${InnerContent} & {
    display: flex;
  }

  ${Section} ${InnerContent} &:nth-child(2) {
    justify-content: flex-end;
  }

  ${Section} ${InnerContent} &:nth-child(1) {
    justify-content: flex-start;
  }

  ${Section} & #right {
    top: -1rem;
    right: 8rem;
    width: 22.8rem;
    height: 22.8rem;
    margin-right: 14.4rem;
  }

  ${Section} & #left {
    left: 13rem;
    top: -5rem;
    /* right: 0; */
    /* top: 7.2rem; */
    width: 25.8rem;
    height: 25.8rem;
    margin-left: 8.6rem;
  }

  ${Section} & #right, ${Section} & #left {
    position: absolute;
  }

  @media (min-width: 701px) {
    & h1 {
      max-width: 30vw;
      transition-delay: 200ms;
    }
  }

  ${Section}[aria-hidden='false'] & h1, ${Section}[aria-hidden='false'] & p {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (min-width: 701px) {
    & p {
      max-width: 70.1rem;
      font-size: 1.54rem;
      -webkit-transition-delay: 310ms;
      transition-delay: 310ms;
    }
  }

  & p {
    line-height: 1.6;
    color: #000;
    margin-top: 2rem;
  }

  & h1 {
    font-size: 3.76rem;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: #a42e62;
  }

  & p,
  & h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  @media (min-width: 701px) {
    & p {
      width: 32vw;
    }
  }

  /* img {
    width: 70.1rem;
    height: 70.1rem;
  } */
`;

export const Content = styled.div`
  ${Article} & {
    position: relative;
  }
`;
