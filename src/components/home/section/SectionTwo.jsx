import React, { forwardRef } from "react";
import useIntersectionContext from "../../../utils/hooks/useIntersectionContext";

import {
  SectionTwoContainer,
  InnerContent,
  Article,
  Content,
  ArticleContainer,
} from "../../../styles/SectionTwo.styled";

const SectionTwo = () => {
  const { inVP2, section2 } = useIntersectionContext();
  return (
    <SectionTwoContainer
      ref={section2}
      data-section="two"
      data-color="white"
      className="white"
      tabIndex="1"
      aria-hidden={inVP2 ? "false" : "true"}
    >
      <InnerContent>
        <ArticleContainer>
          <Article data-theme="">
            <Content>
              <h1>Design</h1>
              <p>
                I come up with extremely rich designs and prototypes that are
                immersed in stylesheets while altering font sizes and
                considering layouts. I'm dedicated to making Fluent user
                experiences while being trendy.
              </p>
            </Content>
            {/* <img id="right" src="https://i.imgur.com/atOiQU1.png" alt="form" /> */}
            {/* F7E2E2 */}
          </Article>
          <Article data-theme="">
            <Content>
              <h1>Engineering</h1>
              <p>
                In building JavaScript applications, I'm equipped with just the
                right tools, and can absolutely function independently of them
                to deliver fast, resilient solutions optimized for scale —
                performance and scalabilty are priorities on my radar.
              </p>
            </Content>
            {/* <img id="left" src="https://i.imgur.com/eLU2gWt.png" alt="form" /> */}
          </Article>
        </ArticleContainer>
      </InnerContent>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
