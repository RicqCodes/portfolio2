import React, { forwardRef, useState } from "react";
import { useEffect } from "react";
import useIntersectionContext from "../../../utils/hooks/useIntersectionContext";

import {
  SectionOneContainer,
  InnerContent,
  Article,
  Content,
  Ul,
  Figure,
  Span,
  InnerContentBottom,
  FigureMobileContainer,
  FigureMobile,
} from "../../../styles/SectionOne.styled";

const SectionOne = () => {
  const { inVP1, section1, setRerun } = useIntersectionContext();
  setRerun((prev) => !prev);
  const [hover, setHover] = useState(false);

  return (
    <SectionOneContainer
      ref={section1}
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
      </InnerContentBottom>
      <FigureMobileContainer>
        <FigureMobile>
          <Span></Span>
        </FigureMobile>
      </FigureMobileContainer>
    </SectionOneContainer>
  );
};

export default SectionOne;
