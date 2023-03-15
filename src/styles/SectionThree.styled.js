import styled from "styled-components";

export const SectionThreeContainer = styled.section`
  display: flex;
  height: 100vh;
  padding: 5rem 8rem 0;
  margin: auto;
  scroll-snap-align: start;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  @media (max-width: 41em) {
    padding: 48px 24px;
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
  width: 100%;
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
    max-width: 701px;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    transition-delay: 310ms;
  }

  & h1 {
    font-size: 5rem;
    color: #fff;
    font-weight: 600;
    margin: 0.67em 0;
  }

  @media (min-width: 701px) {
    & h1 {
      transition-delay: 200ms;
    }
  }
`;

export const Figure = styled.figure`
  margin-top: 10rem;
  width: 60%;

  @media (max-width: 47.8rem) {
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
