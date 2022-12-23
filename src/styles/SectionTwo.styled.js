import styled from "styled-components";
import { Nav } from "./SectionOne.styled";

export const SectionTwoContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20rem 12rem 0;
  scroll-snap-align: start;

  & [data-section="two"] .sc-bcfvAP {
    color: red;
  }

  @media (max-width: 41em) {
    padding: 10rem 6rem 0;
    scroll-snap-align: none;
  }
`;

export const InnerContent = styled.div`
  display: flex;
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;
  width: 100%;
`;

export const Article = styled.article`
  /* text-align: left;
  position: relative; */
  & p,
  & h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  & h1 {
    font-size: 4.5rem;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: #a42e62;
    /* max-width: 30vw; */
    transition-delay: 200ms;
  }

  & p {
    width: 60rem;
    font-size: 1.8rem;
    -webkit-transition-delay: 310ms;
    transition-delay: 310ms;
    line-height: 1.8;
    color: #000;
    margin-top: 2rem;
  }

  @media (max-width: 41em) {
    & p {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  ${Article} & {
    position: relative;
  }
`;
