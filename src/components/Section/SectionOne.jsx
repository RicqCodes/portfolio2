import React, { forwardRef, useState } from "react";
import { useEffect } from "react";

import {
  Section,
  InnerContent,
  Article,
  Content,
  Ul,
  Figure,
  Span,
  InnerContentBottom,
  Nav,
} from "../../styles/SectionOne.styled";

const SectionOne = forwardRef(
  (
    {
      element1,
      element2,
      element3,
      element4,
      element5,
      inVP1,
      inVP2,
      inVP3,
      inVP4,
      inVP5,
    },
    ref
  ) => {
    const [hover, setHover] = useState(false);

    const scrollTo = (section) => {
      console.log(section);
      section && section.scrollIntoView({ behavior: "smooth" });
    };

    console.log(inVP5, element5);

    return (
      <Section
        ref={ref}
        data-section="one"
        data-color="brown"
        className="brown"
        tabIndex="1"
        aria-hidden={inVP1 ? "false" : "true"}
      >
        <InnerContent>
          <Article data-theme="brown">
            <Content>
              <h1 aria-label="Front Developer">
                <span>
                  Frontend & Blockchain
                  <br /> Developer
                  <span>.</span>
                </span>
              </h1>
              <p>
                I enjoy designing and developing solid and scalable frontend
                products with great user experiences.
              </p>
            </Content>
          </Article>
          <Figure data-hover={hover}>
            <Span
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              aria-label="photo of prince"
              role="img"
            ></Span>
          </Figure>
        </InnerContent>
        <InnerContentBottom>
          <Ul aria-label="Highlights.">
            <li>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </li>
            <li>
              Over a decade of experience building products for clients across
              several countries.
            </li>
          </Ul>
          <Nav aria-label="Main navigation">
            <ul>
              <li>
                <button
                  onClick={() => scrollTo(element1)}
                  type="button"
                  aria-label="Go to first section."
                  className={
                    !inVP2 && !inVP3 && !inVP4 && !inVP5 && inVP1
                      ? "current"
                      : ""
                  }
                ></button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(element2)}
                  type="button"
                  aria-label="Go to second section"
                  className={
                    !inVP1 && !inVP3 && !inVP4 && !inVP5 && inVP2
                      ? "current"
                      : ""
                  }
                ></button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(element3)}
                  type="button"
                  aria-label="Go to third section"
                  className={
                    !inVP1 && !inVP2 && !inVP4 && !inVP5 && inVP3
                      ? "current"
                      : ""
                  }
                ></button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(element4)}
                  type="button"
                  aria-label="Go to fourth section"
                  className={
                    !inVP1 && !inVP2 && !inVP3 && !inVP5 && inVP4
                      ? "current"
                      : ""
                  }
                ></button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(element5)}
                  type="button"
                  aria-label="Go to fifth section"
                  className={
                    !inVP1 && !inVP2 && !inVP3 && !inVP4 && inVP5
                      ? "current"
                      : ""
                  }
                ></button>
              </li>
            </ul>
          </Nav>
        </InnerContentBottom>
      </Section>
    );
  }
);

export default SectionOne;
