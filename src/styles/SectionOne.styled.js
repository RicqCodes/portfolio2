import styled from "styled-components";

export const Section = styled.section`
  /* General Sttyles */
  &[aria-hidden="false"] {
    z-index: 3;
    user-select: auto;
  }

  @media (min-width: 701px) {
    &[aria-hidden="true"] {
      overflow: hidden;
      user-select: none;
    }
  }

  @media (max-height: 1199px) {
    @media (min-width: 701px) {
      &:not([data-section="one"]):not([data-section="footer"]) {
        min-height: 100vh;
      }
    }
  }

  &[aria-hidden="false"] p,
  .lhhpGw[aria-hidden="false"] h1 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  scroll-snap-align: start;

  /* Only Section 1 */
  &:nth-child(1) {
    @media (min-width: 581px) {
      & {
        background: linear-gradient(
          90deg,
          ${({ theme }) => theme.colors.primaryColor} 67%,
          ${({ theme }) => theme.colors.secondaryColor} 33%
        );
      }
    }

    @media (min-width: 701px) {
      &[aria-hidden="true"] {
        overflow: unset;
      }
    }
    flex-direction: column;
    padding-bottom: 6.1rem;
    background: ${({ theme }) => theme.colors.primaryColor};
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    flex-direction: row;
    justify-content: normal;
  }

  &:nth-child(3) {
    align-items: normal;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  &:nth-child(4) {
    align-items: normal;
  }

  &:nth-child(5) {
    justify-content: center;
    /* align-items: flex-start; */
  }
`;

export const InnerContent = styled.div`
  @media (min-width: 581px) {
    ${Section} & {
      margin-top: calc(14.91rem + 3.88rem);
    }
  }

  ${Section} & {
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    ${Section} & {
      max-width: 150rem;
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

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
  }
`;

export const Article = styled.article`
  p {
    line-height: 1.6;
  }

  p,
  h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  @media (min-width: 701px) {
    ${Section} & {
      margin-top: -5.04rem;
    }
  }

  @media (min-width: 701px) {
    p {
      width: 32vw;
    }
  }

  text-align: left;
  position: relative;
`;

export const Figure = styled.figure`
  width: 36rem;
  height: 36rem;
  position: relative;
  margin-right: calc(5.5rem + 3rem);
  transition: all 3s ease;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    z-index: -1;
    transition: all 0.3s ease;
    border-radius: 8px;
  }

  &[data-hover="true"] {
    ::before {
      transform: translate(-5px, -5px);
    }
  }
`;

export const Span = styled.span`
  display: block;
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
    :hover {
      background-image: url("https://i.imgur.com/PTYA65R.png");
    }
  }
`;

export const Content = styled.div`
  ${Section} & {
    position: relative;
  }

  ${Section}[aria-hidden='false'] & h1 {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  @media (min-width: 581px) {
    ${Section} ${Article} & h1 {
      font-size: 5.33rem;
    }
  }

  ${Article}[data-theme='brown'] & h1 {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  @media (min-width: 701px) {
    ${Article} h1 {
      max-width: 30vw;
      -webkit-transition-delay: 200ms;
      transition-delay: 200ms;
    }
  }

  ${Article} & h1 {
    margin: 0;
    font-size: 4em;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.19rem;
    color: #4831d4;
  }

  ${InnerContent} ${Article} & h1 > span > span {
    margin-left: 0.5rem;
    color: #d7a2b9;
  }

  ${Section}[aria-hidden='false'] ${Article} p {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (min-width: 581px) {
    ${Section} ${Article} & p {
      font-size: 1.87rem;
      margin: 1.8rem 0;
    }
  }

  ${Article}[data-theme='brown'] & p {
    color: #727170;
  }

  @media (min-width: 701px) {
    ${Article} & p {
      max-width: 701px;
      font-size: 1.07em;
      -webkit-transition-delay: 310ms;
      transition-delay: 310ms;
    }
  }
`;

export const InnerContentBottom = styled.div`
  align-self: flex-start;
  padding-left: 14.4rem;
  display: flex;
  justify-content: space-between;
  width: 41%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  width: 28vw;
  line-height: 1.6;
`;

export const Nav = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  margin-top: -7rem;
  right: 7.5rem;

  ${Section}[data-section="one"] & {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${Section}[data-section="two"]  & {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  ${Section}[data-section="three"]  & {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${Section}[data-section="four"]  & {
    color: ${({ theme }) => theme.colors.secondaryColor};
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
`;
