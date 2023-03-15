import React from "react";
import { Link } from "react-router-dom";
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
                <h1>I build</h1>
                <p>
                  I specialize in building sleek and responsive user interfaces
                  that provide excellent user experiences.
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
                <h1>I write</h1>
                <p>
                  I love to share my knowledge and insights through writing
                  articles on various topics related to web development.
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
