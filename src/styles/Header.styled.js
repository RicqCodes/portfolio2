import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media (min-width: 701px) {
    position: fixed;
    padding-right: 8.64rem;
    padding-left: 8.64rem;
  }

  width: 100%;
  display: flex;
  z-index: 1000;
  max-height: 17.2rem;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: transparent;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  font-size: 1rem;
  height: 16.12rem;
`;

export const Logo = styled.a`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 12rem;
  height: 4.6rem;
  position: relative;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: color 700ms;
  transition: color 700ms;
  outline-color: transparent;
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
export const Button = styled.button`
  /* z-index: 999; */
  width: 4rem;
  height: 3rem;
  background: none;
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-flexbox;
  display: inline-flex;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  border: none;

  ${HeaderContainer} &:before,
  ${HeaderContainer} &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${HeaderContainer} &:before {
    top: 0;
  }

  ${HeaderContainer} &:after {
    right: 0;
    width: 72%;
    top: 1.6rem;
  }
`;

export const Nav = styled.nav`
  /* z-index: 998; */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  box-shadow: none;
  padding: 5.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (min-width: 701px) {
    ${HeaderContainer} &:not(.open) {
      opacity: 1;
      visibility: hidden;
      pointer-events: none;
    }
  }

  @media (min-width: 701px) {
    ${HeaderContainer} & {
      top: 2.2rem;
      right: 5.41rem;
      width: 35.223rem;
      font-size: 1.58rem;
      position: absolute;
      -webkit-transition: opacity 0.4s, box-shadow 0.4s;
      transition: opacity 0.4s, box-shadow 0.4s;
    }
  }

  &::before {
    @media (min-width: 701px) {
      ${HeaderContainer} &:not(.open):before {
        -webkit-transform: scaleX(0.3826) scaleY(0.27);
        -ms-transform: scaleX(0.3826) scaleY(0.27);
        transform: scaleX(0.3826) scaleY(0.27);
      }
    }
  }
`;

export const Ul = styled.ul`
  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav}:not(.open) & {
      -webkit-transform: translateY(50px);
      -ms-transform: translateY(50px);
      transform: translateY(50px);
    }
  }

  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav}:not(.open) & {
      opacity: 0;
    }
  }

  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav} & {
      margin: 2.18rem 0;
      -webkit-transition-delay: 200ms;
      transition-delay: 200ms;
      -webkit-transition: opacity, -webkit-transform 0.3s;
      -webkit-transition: opacity, transform 0.3s;
      transition: opacity, transform 0.3s;
    }
  }

  @media (min-width: 701px) {
    ${HeaderContainer} & {
      line-height: 2.5;
      font-size: 1.8rem;
    }
  }

  &,
  ol,
  li {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
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

  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav} & {
      margin-top: 1.267rem;
    }
  }

  ul {
    font-size: 1.82rem;

    @media (min-width: 701px) {
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
        color: ${({ theme }) => theme.colors.primaryColor};
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

    @media (min-width: 701px) {
      ${HeaderContainer} ${Nav}:not(.open) & {
        opacity: 0;
      }
    }

    @media (min-width: 701px) {
      ${HeaderContainer} ${Nav} & {
        margin: 0 0 5.6rem;
        -webkit-transition-delay: 400ms;
        transition-delay: 400ms;
      }
    }
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

  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav} ${BasicContact} & {
      -webkit-transition: opacity 0.2s 400ms;
      transition: opacity 0.2s 400ms;
    }
  }
`;

export const SocialContact = styled.ul`
  padding: 0;
  position: relative;

  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav}:not(.open) & {
      -webkit-transform: translateY(30px);
      -ms-transform: translateY(30px);
      transform: translateY(30px);
      opacity: 0;
    }
  }

  @media (min-width: 701px) {
    ${HeaderContainer} ${Nav} & {
      -webkit-transition-delay: 600ms;
      transition-delay: 600ms;
      -webkit-transition: opacity, -webkit-transform 0.3s;
      -webkit-transition: opacity, transform 0.3s;
      transition: opacity, transform 0.3s;
      font-size: 1.42rem;
    }
  }

  & li:not(:last-of-type) {
    margin-right: 3.56rem;
  }

  li {
    display: inline-block;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
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
