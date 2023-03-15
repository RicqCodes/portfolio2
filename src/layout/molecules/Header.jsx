import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  HeaderContainer,
  Logo,
  Button,
  Nav,
  Ul,
  BasicContact,
  SocialContact,
  Span,
} from "../../styles/Header.styled";
import useIntersectionContext from "../../utils/hooks/useIntersectionContext";

const Header = ({ inViewPort }) => {
  const [open, setOpen] = useState(false);
  const { inVP1, inVP2, inVP4, inVP5, section1 } = useIntersectionContext();
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };
  console.log(section1);

  return (
    <HeaderContainer>
      <Logo
        intersection={
          (inVP1 && location.pathname === "/") ||
          inVP2 ||
          inVP4 ||
          inVP5 ||
          location.pathname.includes("/work")
            ? true
            : false
        }
        aria-label="Logo, go to homepage"
      >
        <Link to="">P.</Link>
      </Logo>
      <Button
        type="button"
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        aria-expanded={inViewPort ? "true" : "false"}
        onClick={handleToggle}
        className={open ? "open" : "close"}
        intersection={location.pathname.includes("/work") ? true : false}
      ></Button>
      <Nav aria-label="Contact menu" className={open ? "open" : "close"}>
        <Ul itemScope itemType="http://schema.org/SiteNavigationElement">
          <li>
            <Link data-link to="/work">
              Work
            </Link>
          </li>
          <li>
            <Link data-link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link data-link to="/resume">
              Resume
            </Link>
          </li>
        </Ul>
        <BasicContact>
          <Span>Let's Connect</Span>
          <ul>
            <li>
              <a data-link href="mailto:princenwakanma1996@gmail.com">
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
