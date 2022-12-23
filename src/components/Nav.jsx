import React from "react";
import styled from "styled-components";

import { SectionOneContainer } from "../styles/SectionOne.styled";
import { SectionTwoContainer } from "../styles/SectionTwo.styled";
import { SectionThreeContainer } from "../styles/SectionThree.styled";
import { SectionFourContainer } from "../styles/SectionFour.styled";
import { SectionFiveContainer } from "../styles/SectionFive.styled";
import { FooterContainer } from "../styles/Footer.styled";

const Nav = (props) => {
  console.log(props.inVP1, props.inVP2, props.inVP3, props.inVP4, props.inVP5);
  return (
    <NavContainer
      aria-label="Main navigation"
      className={
        !props.inVP2 &&
        !props.inVP3 &&
        !props.inVP4 &&
        !props.inVP5 &&
        !props.inVP1
          ? "hide"
          : props.inVP1 || props.inVP3
          ? "primaryColor"
          : "secondaryColor"
      }
    >
      <ul>
        <li>
          <button
            onClick={() => props.scrollTo(props.element1)}
            type="button"
            aria-label="Go to first section."
            className={
              !props.inVP2 &&
              !props.inVP3 &&
              !props.inVP4 &&
              !props.inVP5 &&
              props.inVP1
                ? "current"
                : ""
            }
          ></button>
        </li>
        <li>
          <button
            onClick={() => props.scrollTo(props.element2)}
            type="button"
            aria-label="Go to second section"
            className={
              !props.inVP1 &&
              !props.inVP3 &&
              !props.inVP4 &&
              !props.inVP5 &&
              props.inVP2
                ? "current"
                : ""
            }
          ></button>
        </li>
        <li>
          <button
            onClick={() => props.scrollTo(props.element3)}
            type="button"
            aria-label="Go to third section"
            className={
              !props.inVP1 &&
              !props.inVP2 &&
              !props.inVP4 &&
              !props.inVP5 &&
              props.inVP3
                ? "current"
                : ""
            }
          ></button>
        </li>
        <li>
          <button
            onClick={() => props.scrollTo(props.element4)}
            type="button"
            aria-label="Go to fourth section"
            className={
              !props.inVP1 &&
              !props.inVP2 &&
              !props.inVP3 &&
              !props.inVP5 &&
              props.inVP4
                ? "current"
                : ""
            }
          ></button>
        </li>
        <li>
          <button
            onClick={() => props.scrollTo(props.element5)}
            type="button"
            aria-label="Go to fifth section"
            className={
              !props.inVP1 &&
              !props.inVP2 &&
              !props.inVP3 &&
              !props.inVP4 &&
              props.inVP5
                ? "current"
                : ""
            }
          ></button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  top: 50%;
  right: 7.5rem;

  &.primaryColor {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.secondaryColor {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  &.hide {
    display: none;
  }

  ${SectionOneContainer}[data-section="one"] & {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${SectionTwoContainer}[data-section="two"]  & {
    display: none;
    background-color: blue;
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  ${SectionThreeContainer}[data-section="three"]  & {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${SectionFourContainer}[data-section="four"]  & {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  ${SectionFiveContainer}[data-section="four"]  & {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  ${FooterContainer}[data-section="footer"]  & {
    display: none;
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

  @media (max-width: 41rem) {
    display: none;
  }
`;
