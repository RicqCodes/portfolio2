import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100vh;
  scroll-snap-align: ${(props) => (props?.path === "/" ? "start" : "none")};
  background-color: brown;
  display: flex;
  align-items: center;

  @media (max-width: 41em) {
    scroll-snap-align: none;
    height: auto;
    margin-top: 8rem;
  }
`;

export const InnerContainer = styled.div`
  padding: 14rem;
  width: 100%;
  margin: auto;

  @media (max-width: 39em) {
    padding: 8rem;
  }
`;

export const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 13.6rem;

  h3 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;

    li {
      a {
        color: #fff;
      }
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 24rem;

  @media (max-width: 39em) {
    gap: 4rem;
  }

  @media (max-width: 32em) {
    flex-direction: column;
    gap: 8rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const FootNote = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5.5rem;
  color: #fff;
  font-size: 1.8rem;
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  li {
    a {
      color: #fff;
    }
  }

  @media (max-width: 32em) {
    display: none;
  }
`;
