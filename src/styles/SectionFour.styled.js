import styled from "styled-components";

// import { Section } from "./SectionOne.styled";

export const SectionFourContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: start;

  @media (max-width: 41em) {
    padding: 10rem 6rem 0;
    scroll-snap-align: none;
  }

  @media (max-width: 30em) {
    flex-direction: column;
    padding: 15rem 0.5rem 0;
    margin-bottom: 10rem;
    /* margin-top: 5rem; */
  }

  @media (max-width: 26rem) {
    margin-bottom: 0;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 26rem) {
    width: 90%;
  }
`;

export const Lanes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;

  @media (max-width: 29.3em) {
    flex-direction: column;
  }
`;

export const Lane = styled.div`
  padding: 8rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
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

  @media (max-width: 41.2rem) {
    padding: 4rem;
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

  @media (max-width: 41.2em) {
    h1 {
      font-size: 3.8rem;
      max-width: 50vw;
    }
  }

  @media (max-width: 29em) {
    p {
      width: 50vw;
    }
  }
`;
