import React, { forwardRef } from "react";

import {
  SectionTwoContainer,
  InnerContent,
  Article,
  Content,
  ArticleContainer,
} from "../../styles/SectionTwo.styled";

const SectionTwo = forwardRef(({ inVP2 }, ref) => {
  return (
    <SectionTwoContainer
      ref={ref}
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
                With my strong understanding of user experience and a keen eye
                for aesthetics, I am able to beautifully manipulate styles and
                create visually appealing and intuitive websites. My skill in
                styling allows me to bring a unique and professional touch to
                every web design project.
              </p>
            </Content>
            {/* <img id="right" src="https://i.imgur.com/atOiQU1.png" alt="form" /> */}
            {/* F7E2E2 */}
          </Article>
          <Article data-theme="">
            <Content>
              <h1>Engineering</h1>
              <p>
                In building JavaScript applications, I pride myself on my
                ability to write efficient and effective code in plain
                javascript. I am constantly striving to improve my skills and
                stay up-to-date on the latest best practices in order to deliver
                high-quality solutions. I also place a strong emphasis on
                optimization in my work, ensuring that my code runs smoothly and
                efficiently to meet the needs of my users.
              </p>
            </Content>
            {/* <img id="left" src="https://i.imgur.com/eLU2gWt.png" alt="form" /> */}
          </Article>
        </ArticleContainer>
      </InnerContent>
    </SectionTwoContainer>
  );
});

export default SectionTwo;
