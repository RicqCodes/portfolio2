import styled from "styled-components";

import { SectionTwoContainer } from "./SectionTwo.styled";
import { SectionThreeContainer } from "./SectionThree.styled";
import { SectionFourContainer } from "./SectionFour.styled";
import { SectionFiveContainer } from "./SectionFive.styled";
import { FooterContainer } from "./Footer.styled";

export const SectionOneContainer = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  padding-bottom: 6.1rem;
  flex-direction: column;
  &[aria-hidden="false"] {
    z-index: 3;
    user-select: auto;
  }
  &[aria-hidden="false"] p,
  .lhhpGw[aria-hidden="false"] h1 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primaryColor} 67%,
    ${({ theme }) => theme.colors.secondaryColor} 33%
  );

  @media (min-width: 701px) {
    &[aria-hidden="true"] {
      overflow: unset;
    }
  }

  @media (max-width: 41em) {
    background: ${({ theme }) => theme.colors.primaryColor};
    gap: 6rem;
    scroll-snap-align: none;
  }
`;

export const InnerContent = styled.div`
  ${SectionOneContainer} & {
    width: 100%;
    display: flex;
    margin-top: calc(14.91rem + 3.88rem);
    align-items: center;
    gap: 4rem;
    justify-content: space-between;
    padding: 0 14.4rem;
    max-width: 150rem;
  }

  @media (max-width: 83em) {
    max-width: 130rem;
  }

  @media (max-width: 41rem) {
    ${SectionOneContainer} & {
      padding: 0 6rem;
      justify-content: center;
    }
  }

  @media (max-width: 27rem) {
    ${SectionOneContainer} & {
      max-width: 30rem;
      padding: 0;
    }
  }
`;

export const Article = styled.article`
  margin-top: -5.04rem;

  p {
    line-height: 1.6;
  }

  p,
  h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  @media (max-width: 72em) {
    p {
      width: 32vw;
    }
  }

  text-align: left;
  position: relative;

  @media (max-width: 41em) {
    margin-top: 0.5rem;

    h1 {
      width: 50vh;
    }
    /* 
    p {
      width: 100vw;
    } */
  }
  @media (max-width: 24.5em) {
    h1 {
      width: 30vh;
    }
  }
`;

export const Figure = styled.figure`
  width: 36rem;
  height: 36rem;
  position: relative;
  margin-right: calc(5.5rem + 3rem);
  transition: all 0.3s ease;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    transition: all 0.3s ease;
    /* z-index: -1; */
    border-radius: 8px;
  }

  &[data-hover="true"] {
    ::before {
      transform: translate(-5px, -5px);
    }
  }

  @media (max-width: 61em) {
    width: 25rem;
    height: 25rem;

    margin-right: calc(1.5rem + 3rem);
    ::before {
      /* right: -1.8rem; */
    }
  }

  @media (max-width: 49.5em) {
    width: 22rem;
    height: 22em;

    ::before {
      right: 1rem;
    }
  }

  @media (max-width: 44em) {
    ::before {
      /* right: -0.2rem; */
    }
  }

  @media (max-width: 41em) {
    display: none;
  }
`;

export const Span = styled.span`
  display: block;
  position: relative;
  height: inherit;
  background-color: #fff;
  background-size: cover;
  background-position-x: center;
  margin-top: -3rem;
  margin-left: -2.2rem;
  border-radius: 8px;
  background-image: linear-gradient(
      90deg,
      rgba(154, 23, 80, 0.5),
      rgba(154, 23, 80, 0.5)
    ),
    url("https://i.imgur.com/PTYA65R.png");
  width: inherit;

  @media (hover: hover) and (any-pointer: fine) {
    /* z-index: -1; */

    :hover {
      background-image: url("https://i.imgur.com/PTYA65R.png");
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${SectionOneContainer} & {
    position: relative;
  }

  ${Article} & h1 {
    margin: 0;
    font-size: 5.33rem;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.19rem;
  }
  ${Article} & p {
    margin: 0;
    font-size: 1.88rem;
    width: 30vw;
  }

  @media (max-width: 72em) {
    ${SectionOneContainer} ${Article} & h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 53.5em) {
    ${SectionOneContainer} ${Article} & h1 {
      font-size: 4rem;
    }
  }

  ${SectionOneContainer}[aria-hidden='false'] & h1 {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  ${Article}[data-theme='brown'] & h1 {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  ${InnerContent} ${Article} & h1 > span > span {
    margin-left: 0.5rem;
    color: #d7a2b9;
  }

  ${SectionOneContainer}[aria-hidden='false'] ${Article} p {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  ${Article}[data-theme='brown'] & p {
    color: #727170;
  }

  @media (max-width: 41em) {
    ${SectionOneContainer} ${Article} & p {
      font-size: 1.88rem;
      width: 75vw;
    }
  }

  @media (max-width: 27em) {
    /* align-items: center; */

    ${SectionOneContainer} ${Article} & h1 {
      font-size: 4rem;
      /* text-align: center; */
    }

    ${Article} & p {
      font-size: 1.4rem;
      width: 75vw;
    }
  }

  @media (max-width: 24.5em) {
    ${SectionOneContainer} ${Article} & h1 {
      font-size: 5.5rem;
      /* text-align: center; */
    }

    ${SectionOneContainer} ${Article} & p {
      font-size: 1.7rem;
      width: 75vw;
    }
  }
`;

export const InnerContentBottom = styled.div`
  align-self: flex-start;
  padding-left: 14.4rem;
  display: flex;
  justify-content: space-between;
  width: 41%;

  @media (max-width: 41em) {
    width: 90%;
    padding-left: 8rem;
    justify-content: flex-start;
    gap: 2rem;
  }

  @media (max-width: 24.5em) {
    padding-left: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  width: 28vw;
  line-height: 1.6;

  @media (max-width: 41em) {
    width: 90%;
    gap: 3rem;
  }

  @media (max-width: 24.5em) {
    align-items: center;
    width: 75vw;
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  margin-top: -7rem;
  right: 7.5rem;

  ${SectionOneContainer}[data-section="one"] & {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${SectionTwoContainer}[data-section="two"]  & {
    display: none;
    background-color: blue;
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  ${SectionThreeContainer}[data-section="three"]  & {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${SectionFourContainer}[data-section="four"]  & {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  ${SectionFiveContainer}[data-section="four"]  & {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  ${FooterContainer}[data-section="footer"]  & {
    display: none;
  }

  & ul {
    width: 0.71rem;
    height: 0.71rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  li {
    width: 0.75rem;
  }

  button {
    width: 100%;
    display: flex;
    width: inherit;
    cursor: pointer;
    min-height: 2em;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;

    ::after {
      content: "";
      width: 100%;
      height: 0.75rem;
      position: absolute;
      background-color: currentColor;
      border: 1px solid currentColor;
      -webkit-transition: -webkit-transform 0.2s 100ms;
      -webkit-transition: transform 0.2s 100ms;
      transition: transform 0.2s 100ms;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &.current:after {
      transform: rotate(0) scale(2);
      background: transparent;
    }
  }

  @media (max-width: 41rem) {
    display: none;
  }
`;

export const FigureMobileContainer = styled.div`
  display: none;
  @media (max-width: 41em) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36rem;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export const FigureMobile = styled.figure`
  width: 24rem;
  height: 24rem;
  position: relative;
  margin-right: calc(5.5rem + 3rem);
  transition: all 0.3s ease;
  margin: 0 auto;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    transition: all 0.3s ease;
    border-radius: 8px;
    right: 1rem;
  }

  &[data-hover="true"] {
    ::before {
      transform: translate(-5px, -5px);
    }
  }

  @media (max-width: 41em) {
  }
`;

// export const MobileSpan = styled.span``;
