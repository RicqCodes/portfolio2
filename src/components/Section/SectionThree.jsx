import React, { forwardRef } from "react";

import {
  SectionThreeContainer,
  InnerContent,
  Article,
  Content,
  Figure,
} from "../../styles/SectionThree.styled";
import portfolio from "../../svg/portfolio.svg";

const SectionThree = forwardRef(({ inVP3 }, ref) => {
  return (
    <SectionThreeContainer
      ref={ref}
      data-section="three"
      data-color="brown"
      tabIndex="1"
      aria-hidden={inVP3 ? "false" : "true"}
    >
      <InnerContent>
        <Article>
          <Content>
            <h1>
              Experiences
              <br />
              Last 5 Years
            </h1>
            <p>
              At P.Tech, I had the opportunity to work on various website
              building projects for clients across Nigeria. The company had a
              wide range of clients in different industries, which allowed me to
              gain experience in building websites for different purposes.
            </p>
            <p>
              As an intern at Crea8 Solutions, I was given the opportunity to
              work on web development projects that aimed to solve real-world
              problems for clients. This experience was particularly valuable as
              it allowed me to apply my technical skills in a practical setting
              and see the impact of my work on people's lives.
            </p>
            <p>
              At Sibus Solutions, I was hired as a junior developer and worked
              on a variety of projects that aimed to solve practical issues for
              clients. This was a great opportunity for me to take on more
              responsibility and work on more complex projects.
            </p>
            <p>
              At DotLaunch, I was part of a team working on a web3 decentralised
              Launchapp pad. This was an exciting project that involved using
              cutting-edge technologies to create a platform that would enable
              people to launch their own decentralized applications. I enjoyed
              the challenge of working on this innovative project and learned a
              lot about how to build applications on a decentralized platform.
            </p>
            <p>
              Currently, I am working as a freelancer, taking on various web
              development projects. This allows me to work on a wide range of
              projects and continue to learn and grow as a developer.
              Freelancing also gives me the flexibility to choose the projects
              that align with my interests and goals, which is a great benefit.
            </p>
          </Content>
        </Article>
        <Figure>
          <img src={portfolio} alt="portfolio svg" />
        </Figure>
      </InnerContent>
    </SectionThreeContainer>
  );
});

export default SectionThree;
