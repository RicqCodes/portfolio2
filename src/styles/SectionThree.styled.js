import styled from "styled-components";

// import { Section } from "./SectionOne.styled";

export const SectionThreeContainer = styled.section`
  display: flex;
  height: 100vh;
  padding: 5rem 8rem 0;
  margin: auto;
  scroll-snap-align: start;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  @media (max-width: 41em) {
    padding: 10rem 6rem 0;
    scroll-snap-align: none;
    height: auto;
  }
`;

export const InnerContent = styled.div`
  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  @media (max-width: 47.9rem) {
    flex-direction: column;
    width: 100%;
    gap: 5rem;
  }
`;

export const Article = styled.article`
  text-align: left;
  position: relative;
  width: 40%;

  @media (max-width: 47.9rem) {
    width: 100%;
  }
`;

export const Content = styled.div`
  position: relative;

  & p,
  & h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  & p {
    color: #fff;
    width: 27vw;
    max-width: 701px;
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    transition-delay: 310ms;
  }

  & h1 {
    font-size: 5rem;
    margin: 0.67em 0;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media (min-width: 701px) {
    & h1 {
      max-width: 30vw;
      transition-delay: 200ms;
    }
  }

  @media (max-width: 60.7rem) {
    & p {
      width: 30vw;
    }
  }

  @media (max-width: 47.8rem) {
    & p {
      width: 70vw;
    }
  }
`;

export const Figure = styled.figure`
  margin-top: 10rem;
  width: 60%;

  @media (max-width: 47.8rem) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
