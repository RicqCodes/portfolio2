import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 24px;
  max-width: 1440px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  top: 0;
  position: fixed;
  padding-right: 3.64rem;
  padding-left: 3.64rem;
  width: 100%;
  display: flex;
  z-index: 1000;
  max-height: 17.2rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  font-size: 1rem;
  font-size: 40px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.primaryColor};

  @media (max-width: 41em) {
    height: 14rem;
    padding-left: 4rem;
    padding-right: 4rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 20rem;
  height: 4.6rem;
  position: relative;
  flex-direction: column;
  transition: color 1200ms;
  outline-color: transparent;
  text-decoration: none;

  a {
    color: ${({ theme, intersection }) =>
      intersection ? theme.colors.secondaryColor : theme.colors.primaryColor};
  }
`;
export const Button = styled.button`
  z-index: 999;
  width: 4rem;
  height: 3rem;
  background: none;
  position: relative;
  display: inline-flex;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  border: none;

  &:before,
  &:after {
    @media (max-width: 41em) {
      background-color: ${({ theme }) => theme.colors.secondaryColor}!important;
    }
  }

  ${HeaderContainer} &.close:before,
  ${HeaderContainer} &.close:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    transform: rotate(0deg);
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${HeaderContainer} &.close:before {
    top: 0;
  }

  ${HeaderContainer} &.close:after {
    right: 0;
    width: 72%;
    top: 1.6rem;
  }

  ${HeaderContainer} &.open:before,
  ${HeaderContainer} &.open:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    /* transform: rotate(0deg); */
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${HeaderContainer} &.open:before {
    top: 1rem;
    right: 3rem;
    width: 75%;
    transform: rotate(45deg);
  }

  ${HeaderContainer} &.open:after {
    right: 3rem;
    top: 1rem;
    width: 75%;
    transform: rotate(-45deg);
  }

  @media (max-width: 41em) {
    ${HeaderContainer} &:before,
    ${HeaderContainer} &:after {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  box-shadow: none;
  padding: 5.5rem;
  user-select: none;
  flex-direction: column;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.secondaryColor};

  ${HeaderContainer} &:not(.open) {
    opacity: 1;
    visibility: hidden;
    pointer-events: none;
  }

  ${HeaderContainer} & {
    top: 2.2rem;
    right: 5.41rem;
    width: 35.223rem;
    font-size: 1.58rem;
    position: absolute;
    transition: opacity 0.4s, box-shadow 0.4s;

    @media (max-width: 504px) {
      height: 100vh;
      width: 80%;
      top: 0;
      right: 0;
      margin: auto;
    }
  }

  &::before {
    ${HeaderContainer} &:not(.open):before {
      -webkit-transform: scaleX(0.3826) scaleY(0.27);
      -ms-transform: scaleX(0.3826) scaleY(0.27);
      transform: scaleX(0.3826) scaleY(0.27);
    }
  }
`;

export const Ul = styled.ul`
  ${HeaderContainer} ${Nav}:not(.open) & {
    transform: translateY(50px);
    opacity: 0;
    width: 100%;
  }

  ${HeaderContainer} ${Nav} & {
    margin: 2.18rem 0;
    transition-delay: 200ms;
    transition: opacity, transform 0.3s;
  }

  ${HeaderContainer} & {
    line-height: 2.5;
    font-size: 1.8rem;
    font-weight: 400;
  }

  &,
  ol,
  li {
    list-style-type: none;
    padding: 0;

    a {
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet) {
      position: relative;
    }
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet):after {
      content: "";
      width: 100%;
      min-width: 1em;
      height: 100%;
      padding: 0.5rem;
      opacity: 0;
      top: 0;
      right: 0;
      transform: translateX(0);
      transform-origin: left;
      transition: 0.3s;
      position: absolute;
      pointer-events: none;
      background-color: currentColor;
    }
  }
`;

export const BasicContact = styled.div`
  font-size: 1.58rem;
  line-height: 2.5;
  position: relative;

  ${HeaderContainer} ${Nav} & {
    margin-top: 1.267rem;
  }

  ul {
    font-size: 1.82rem;
    font-weight: 400;

    ${HeaderContainer} ${Nav}:not(.open) & {
      -webkit-transform: translateY(40px);
      -ms-transform: translateY(40px);
      transform: translateY(40px);
    }

    &,
    ol,
    li {
      list-style-type: none;
      padding: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.secondaryColor};
    }

    @media (hover: hover) and (any-pointer: fine) {
      a[data-link]:not(.nav-bullet) {
        position: relative;
      }
    }

    @media (hover: hover) and (any-pointer: fine) {
      a[data-link]:not(.nav-bullet):after {
        content: "";
        width: 100%;
        min-width: 1em;
        height: 100%;
        padding: 0.5rem;
        opacity: 0;
        top: 0;
        right: 0;
        transform: translateX(0);
        transform-origin: left;
        transition: 0.3s;
        position: absolute;
        pointer-events: none;
        background-color: currentColor;
      }
    }
  }

  ${HeaderContainer} ${Nav}:not(.open) & {
    opacity: 0;
  }

  ${HeaderContainer} ${Nav} & {
    margin: 0 0 5.6rem;
  }
`;

export const Span = styled.span`
  color: #c6d2f6;
  letter-spacing: 0.25em;
  -webkit-text-transform: uppercase;
  text-transform: uppercase;

  ${HeaderContainer} ${Nav}:not(.open) ${BasicContact} & {
    opacity: 0;
  }
`;

export const SocialContact = styled.ul`
  padding: 0;
  position: relative;

  ${HeaderContainer} ${Nav}:not(.open) & {
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
    opacity: 0;
  }

  ${HeaderContainer} ${Nav} & {
    transition-delay: 600ms;
    transition: opacity, transform 0.3s;
    font-size: 1.42rem;
  }

  & li:not(:last-of-type) {
    margin-right: 3.56rem;
  }

  li {
    display: inline-block;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet) {
      position: relative;
    }
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet):after {
      content: "";
      width: 100%;
      min-width: 1em;
      height: 100%;
      padding: 0.5rem;
      opacity: 0;
      top: 0;
      right: 0;
      transform: translateX(0);
      transform-origin: left;
      transition: 0.3s;
      position: absolute;
      pointer-events: none;
      background-color: currentColor;
    }
  }
`;
