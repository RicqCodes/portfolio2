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
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>
            <p>
              Currently, I work at Shopify as a Senior UX Developer and
              Accessibility advocate crafting thoughtful and inclusive
              experiences that adhere to web standards for over a million
              merchants across the world.
            </p>
            <p>
              Before now, I was Principal Frontend Engineer at hellotax, where I
              worked on a suite of tools and services tailored at providing
              fast, automated VAT Registration / filings &amp; Returns solutions
              for multi-channel sellers across Europe.
            </p>
            <p>
              Prior to hellotax, I was Senior frontend engineering contractor
              with Pixel2HTML, building JavaScript applications and interfaces
              for orgs and individuals.
            </p>
            <p>
              I once also led the frontend team at a Russian startup, Conectar
              through building multiple React applications into a single robust
              learning platform.
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
