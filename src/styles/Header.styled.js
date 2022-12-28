import styled from "styled-components";

export const HeaderContainer = styled.header`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 10;
  top: 0;
  position: fixed;
  padding-right: 8.64rem;
  padding-left: 8.64rem;
  width: 100%;
  display: flex;
  z-index: 1000;
  max-height: 17.2rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  font-size: 1rem;
  height: 16.12rem;

  @media (max-width: 41em) {
    height: 14rem;
    padding-left: 4rem;
    padding-right: 4rem;
    height: 10rem;
    /* background-color: ${({ theme }) => theme.colors.primaryColor}; */
  }

  @media (max-width: 655px) {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Logo = styled.a`
  display: flex;
  width: 20rem;
  height: 4.6rem;
  position: relative;
  flex-direction: column;
  transition: color 700ms;
  outline-color: transparent;
  text-decoration: none;
  z-index: 999;

  img {
    width: 100%;
  }

  @media (max-width: 41em) {
    width: 14rem;
    height: 2rem;

    img {
      width: 100%;
    }
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
  border: none;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.2s ease;
    transform: rotate(0deg);

    background-color: ${(props) =>
      props.harmburger === true
        ? props.theme.colors.secondaryColor
        : props.color === "primaryColor"
        ? props.theme.colors.primaryColor
        : props.theme.colors.secondaryColor};
  }

  &:before {
    top: 0;
  }

  &:after {
    right: 0;
    width: 72%;
    top: 1.6rem;
  }

  &.open:before {
    transform: rotate(45deg);
  }

  &.open:after {
    top: 0;
    width: 100%;
    transform: rotate(-45deg);
  }

  @media (max-width: 655px) {
    &:before,
    &:after {
      content: "";

      background-color: ${(props) => props.theme.colors.secondaryColor};
    }
  }
`;

export const Nav = styled.nav`
  display: none;
  background-color: #fff;
  box-shadow: none;
  padding: 5.5rem;
  flex-direction: column;

  &.open {
    display: inline-block;
  }

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
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.4s, box-shadow 0.4s;

    @media (max-width: 655px) {
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      padding: 8.5rem;
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
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }

  ${HeaderContainer} ${Nav} & {
    margin: 2.18rem 0;
    -webkit-transition-delay: 200ms;
    transition-delay: 200ms;
    transition: opacity, transform 0.3s;

    @media (max-width: 655px) {
      font-size: 3rem;
    }
  }

  ${HeaderContainer} & {
    line-height: 2.5;
    font-size: 1.8rem;
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
    color: ${({ theme }) => theme.colors.secondaryColor};

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

    @media (max-width: 655px) {
      font-size: 3rem;
    }
  }

  ${HeaderContainer} ${Nav}:not(.open) & {
    opacity: 0;
  }

  ${HeaderContainer} ${Nav} & {
    margin: 0 0 5.6rem;
    -webkit-transition-delay: 400ms;
    transition-delay: 400ms;

    @media (max-width: 655px) {
      margin-top: 20rem;
    }
  }
`;

export const Span = styled.span`
  color: #c6d2f6;
  letter-spacing: 0.25em;
  -webkit-text-transform: uppercase;
  text-transform: uppercase;

  @media (max-width: 655px) {
    font-size: 2rem;
  }

  ${HeaderContainer} ${Nav}:not(.open) ${BasicContact} & {
    opacity: 0;
  }

  ${HeaderContainer} ${Nav} ${BasicContact} & {
    -webkit-transition: opacity 0.2s 400ms;
    transition: opacity 0.2s 400ms;
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
    -webkit-transition-delay: 600ms;
    transition-delay: 600ms;
    -webkit-transition: opacity, -webkit-transform 0.3s;
    -webkit-transition: opacity, transform 0.3s;
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

  @media (max-width: 655px) {
    margin-top: 12rem;
    a {
      font-size: 2.2rem;
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
