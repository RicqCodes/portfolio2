import React from "react";
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
                As a frontend designer, I take design seriously. It's important
                to me to create visually appealing and user-friendly interfaces
                that not only look good, but also function smoothly and
                efficiently. I pay close attention to details such as color
                schemes, typography, layout, and overall aesthetics to ensure
                that the end product is not only visually stunning, but also
                easy to use and navigate. Staying up-to-date with the latest
                design trends and techniques is crucial for delivering
                innovative and high-quality designs that meet the needs of my
                clients and users. This means constantly researching and
                experimenting with new tools and methods. Ultimately, my goal is
                to create designs that not only meet the needs and expectations
                of the client, but also leave a lasting impression on the end
                user. A well-designed interface can greatly enhance the user
                experience and I take pride in my ability to deliver just that.
              </p>
            </Content>
          </Article>
          <Article data-theme="">
            <Content>
              <h1>Engineering</h1>
              <p>
                As a front-end designer with a passion for design and a strong
                background in JavaScript, I take pride in crafting visually
                stunning and highly functional websites. I strive to create
                seamless user experiences by combining my technical expertise
                with a deep understanding of user behavior and design
                principles. Whether I'm working on a complex web application or
                a simple landing page, I am always looking for innovative ways
                to solve problems and create engaging experiences. I believe
                that the key to great design is collaboration, and I enjoy
                working closely with other designers, developers, and
                stakeholders to bring ideas to life.
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
