import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  Logo,
  Button,
  Nav,
  Ul,
  BasicContact,
  SocialContact,
  Span,
} from "../styles/Header.styled";

const Header = ({ inViewPort }) => {
  return (
    <HeaderContainer>
      <Logo href="https://prince.dev" aria-label="Logo, go to homepage">
        PrinceDev
      </Logo>
      <Button
        type="button"
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        aria-expanded={inViewPort ? "true" : "false"}
      ></Button>
      <Nav aria-label="Contact menu" className="">
        <Ul itemScope itemType="http://schema.org/SiteNavigationElement">
          <li>
            <Link data-link to="/portfolio">
              Work
            </Link>
          </li>
          <li>
            <Link data-link to="/portfolio">
              Blog
            </Link>
          </li>
          <li>
            <Link data-link to="/portfolio">
              Resume
            </Link>
          </li>
        </Ul>
        <BasicContact>
          <Span>Let's Connect</Span>
          <ul>
            <li>
              <a data-link href="malito:princenwakanma1996@gmail.com">
                Mail me
              </a>
            </li>
            <li>
              <a
                data-link
                href="https://t.me/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Telegram
              </a>
            </li>
          </ul>
        </BasicContact>
        <SocialContact>
          <li data-link>
            <a
              data-link
              href="https://twitter.com/Dechain_Dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              " TW "
            </a>
          </li>
          <li data-link>
            <a
              data-link
              href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
              target="_blank"
              rel="noreferrer noopener"
            >
              " LN "
            </a>
          </li>
          <li data-link>
            <a
              data-link
              href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
              target="_blank"
              rel="noreferrer noopener"
            >
              " GH "
            </a>
          </li>
        </SocialContact>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
