import styled from "styled-components";

export const SectionFourContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10rem 3rem 0;
  scroll-snap-align: start;

  @media (max-width: 41em) {
    padding: 4.5rem 0;
    height: auto;
    scroll-snap-align: none;
  }

  @media (max-width: 29.3em) {
    flex-direction: column;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Lanes = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1280px;
  padding: 64px;
  justify-content: center;
  background-color: #fff;
  width: 100%;

  @media (max-width: 29.3em) {
    flex-direction: column;
    padding: 24px;
    width: 100%;
  }
`;

export const Lane = styled.div`
  /* padding: 8rem; */

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 320px;
    width: 100%;
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
    padding: 4rem 0;
    width: 100%;
  }
`;

export const Article = styled.div`
  margin-top: 4rem;
  text-align: left;
  position: relative;
  margin-bottom: 8.5rem;

  @media (max-width: 41rem) {
    margin: 0;
  }
`;

export const Content = styled.div`
  position: relative;

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secondaryColor};
    font-weight: 900;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: -0.03em;
  }

  p {
    line-height: 1.2;
    font-size: 1.6em;
    letter-spacing: 0.02em;
    margin: 2rem 0;
    color: #727170;
  }

  @media (max-width: 41.2em) {
    h1 {
      font-size: 3.8rem;
      max-width: 100%;
      width: 100%;
    }
  }

  @media (max-width: 29em) {
    p {
      width: 100%;
    }
  }
`;
