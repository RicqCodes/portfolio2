import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

import {
  SectionFourContainer,
  InnerContent,
  Lanes,
  Lane,
  Article,
  Content,
} from "../../styles/SectionFour.styled";

const SectionFour = forwardRef(({ inVP4 }, ref) => {
  return (
    <SectionFourContainer
      ref={ref}
      data-section="four"
      tabIndex="1"
      aria-hidden={inVP4 ? "false" : "true"}
    >
      <InnerContent>
        <Lanes>
          <Lane>
            <Article>
              <Content>
                <h1>I design & build</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima aut nisi tempora
                </p>
              </Content>
            </Article>
            <Link to="/portfolio">
              <p>GO TO WORK</p>
            </Link>
          </Lane>
          <Lane>
            <Article>
              <Content>
                <h1>I write i'm inspired</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima aut nisi tempora
                </p>
              </Content>
            </Article>
            <Link to="/portfolio">
              <p>GO TO BLOG</p>
            </Link>
          </Lane>
        </Lanes>
      </InnerContent>
    </SectionFourContainer>
  );
});

export default SectionFour;
