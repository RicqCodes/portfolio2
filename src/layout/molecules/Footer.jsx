import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FooterContainer,
  InnerContainer,
  ContactMe,
  MainContainer,
  RightContainer,
  Divider,
  FootNote,
  Socials,
} from "../../styles/Footer.styled";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer path={location.pathname} data-section="footer">
      <InnerContainer>
        <ContactMe>
          <h3>Say Hi</h3>
          <MainContainer>
            <ul>
              <li>
                <a href="malito:nwakanmaprince1996@gmail.com">Email Me</a>
              </li>
              <li>
                <a href="t.me/crytomaniaac">I am on Telegram</a>
              </li>
              <li>
                <a href="@">I am on Whatsapp</a>
              </li>
            </ul>
            <RightContainer>
              <Link to="">My Past Work</Link>
              <Link to="">My Personal Blog</Link>
              <Link to="">My Resume</Link>
            </RightContainer>
          </MainContainer>
        </ContactMe>
        <Divider></Divider>
        <FootNote>
          <p>© Prince Nwakanma {currentYear}</p>
          <Socials>
            <li>
              <a href="/">GH</a>
            </li>
            <li>
              <a href="/">TW</a>
            </li>
            <li>
              <a href="/">LN</a>
            </li>
            <li>
              <a href="/">YT</a>
            </li>
          </Socials>
        </FootNote>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
