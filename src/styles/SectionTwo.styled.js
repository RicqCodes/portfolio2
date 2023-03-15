import styled from "styled-components";

export const SectionTwoContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 8rem 14rem;
  width: 100%;
  scroll-snap-align: start;

  & [data-section="two"] .sc-bcfvAP {
    color: red;
  }

  @media (max-width: 41em) {
    padding: 10rem 24px;
    scroll-snap-align: none;
    height: auto;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  width: 100%;
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;
  width: 100%;
`;

export const Article = styled.article`
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
    transition-delay: 200ms;
  }

  & p {
    transition-delay: 310ms;
    line-height: 1.8;
    color: #000;
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  ${Article} & {
    position: relative;
    width: 100%;
  }
`;
