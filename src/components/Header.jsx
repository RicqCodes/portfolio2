import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
import logo from "../svg/logo.svg";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    isOpen ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <HeaderContainer>
      <Logo href="https://prince.dev" aria-label="Logo, go to homepage">
        <img src={logo} alt="logo" />
      </Logo>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        aria-expanded={props.inVP2 ? "true" : "false"}
        harmburger={isOpen ? true : false}
        color={
          (!props.inVP2 && !props.inVP4 && !props.inVP5 && props.inVP1) ||
          props.inVP3
            ? "primaryColor"
            : "SecondaryColor"
        }
        className={isOpen ? "open" : isOpen ? "secondaryColor" : "primaryColor"}
      ></Button>

      <Nav aria-label="Contact menu" className={isOpen ? "open" : "close"}>
        <Ul>
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
              TW
            </a>
          </li>
          <li data-link>
            <a
              data-link
              href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
              target="_blank"
              rel="noreferrer noopener"
            >
              LN
            </a>
          </li>
          <li data-link>
            <a
              data-link
              href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
              target="_blank"
              rel="noreferrer noopener"
            >
              GH
            </a>
          </li>
        </SocialContact>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
