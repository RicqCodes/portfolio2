import styled from "styled-components";

import { Section } from "./SectionOne.styled";

export const SectionFiveContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const InnerContent = styled.div`
  ${Section} & {
    margin-top: 3rem;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    ${Section} & {
      max-width: 150rem;
    }
  }

  @media (min-width: 701px) {
    ${Section} & {
      padding: 0 10rem;
    }
  }
`;

export const Article = styled.article`
  position: relative;

  ${Section} & {
    margin-bottom: 5.74rem;
  }

  @media (min-width: 581px) {
    ${Section} & {
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  ${Section} & {
    position: relative;
  }
`;

export const Header = styled.div`
  max-width: 48rem;
  margin: 0 auto 10rem;

  & h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #9a1750;
  }

  & p {
    letter-spacing: 1.4px;
    font-size: 1.8rem;
    color: #2e0718;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const InfoContainer = styled.div`
  text-align: left;
  display: flex;
  gap: 10rem;
  width: 64rem;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-weight: 200;

  & label {
    color: #c27496;
    font-size: 1.4rem;
  }

  & input[type="text"] {
    padding: 1rem 0;
    border: none;
    border-bottom: 1px solid #c27496;
    background-color: transparent;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 300;
    color: #9a1750;

    ::placeholder {
      font-size: 1.6rem;
      color: #c27496;
      font-weight: 200;
    }
  }

  & input[type="text"]:focus {
    padding: 1rem 0;
    border: none;
    background-color: transparent;
    font-size: 1.8rem;
    outline: none;
    border-bottom: 1px solid #9a1750;

    ::placeholder {
      color: #f9f9f9;
    }
  }
`;

export const Email = styled(Name)`
  & label {
    color: #c27496;
    font-size: 1.4rem;
  }

  & input[type="email"] {
    padding: 1rem 0;
    border: none;
    border-bottom: 1px solid #c27496;
    background-color: transparent;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 300;
    color: #9a1750;

    ::placeholder {
      font-size: 1.6rem;
      color: #c27496;
      font-weight: 200;
    }
  }

  & input[type="email"]:focus {
    padding: 1rem 0;
    border: none;
    background-color: transparent;
    font-size: 1.8rem;
    outline: none;
    border-bottom: 1px solid #9a1750;

    ::placeholder {
      color: #f9f9f9;
    }
  }
`;

export const Message = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 64rem;
  gap: 1rem;

  & label {
    color: #c27496;
    font-size: 1.4rem;
    font-weight: 200;
  }

  & textarea {
    padding: 1rem 0;
    border: 0;
    border-bottom: 1px solid #c27496;
    background-color: transparent;
    font-size: 1.8rem;
    white-space: pre-line;
    resize: none;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 300;
    color: #9a1750;

    ::placeholder {
      font-size: 1.6rem;
      color: #c27496;
      word-wrap: break-word;
      font-weight: 200;
    }

    :focus {
      outline: none;

      ::placeholder {
        color: #f9f9f9;
      }
    }
  }
`;
