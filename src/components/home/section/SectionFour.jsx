import React from "react";
import { Link } from "react-router-dom";

// import { Section } from "../../styles/SectionOne.styled";
import {
  SectionFourContainer,
  InnerContent,
  Lanes,
  Lane,
  Article,
  Content,
} from "../../../styles/SectionFour.styled";
import useIntersectionContext from "../../../utils/hooks/useIntersectionContext";

const SectionFour = () => {
  const { inVP4, section4 } = useIntersectionContext();

  return (
    <SectionFourContainer
      ref={section4}
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
            <Link to="/work">
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
};

export default SectionFour;
