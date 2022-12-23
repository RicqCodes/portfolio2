import styled from "styled-components";

// import { Section } from "./SectionOne.styled";

export const SectionFiveContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 5rem 8rem 0;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;

  @media (max-width: 41em) {
    padding: 10rem 6rem 0;
    scroll-snap-align: none;
    height: auto;
  }
`;

export const InnerContent = styled.div`
  width: 100%;
`;

export const Article = styled.article`
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
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
  width: 95%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  button {
    width: 40%;
    margin: auto;
    height: 5rem;
    background: transparent;
    border: 1px solid #9a1750;
    color: #9a1750;
    font-size: 1.8rem;
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

  @media (max-width: 40.32em) {
    /* padding: 8rem;
    margin: auto; */
  }
`;

export const InfoContainer = styled.div`
  text-align: left;
  display: flex;
  gap: 10rem;
  width: 100%;

  @media (max-width: 524px) {
    flex-direction: column;
    gap: 6rem;
  }
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
      padding-bottom: 0.4rem;
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
  width: 100%;
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
