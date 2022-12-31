import React, { forwardRef } from "react";

import {
  SectionFiveContainer,
  InnerContent,
  Article,
  Content,
  Header,
  Form,
  InfoContainer,
  Name,
  Email,
  Message,
} from "../../../../styles/SectionFive.styled";

const SectionFive = forwardRef(({ inVP5 }, ref) => {
  return (
    <SectionFiveContainer
      ref={ref}
      data-section="five"
      tabIndex="1"
      aria-hidden={inVP5 ? "false" : "true"}
    >
      <InnerContent>
        <Article>
          <Content>
            <Header>
              <h1>Say Hi, it will only take a few sec!</h1>
              <p>
                Got a question or want to make an enquiry, or just want to say
                hello? Go ahead.
              </p>
            </Header>

            <Form>
              <InfoContainer>
                <Name>
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Enter your name" />
                </Name>
                <Email>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Email>
              </InfoContainer>
              <Message>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  type="text"
                  placeholder="Hi, i'd like for us to sit and talk about a project i have in mind, how soon can you be available for a call?"
                />
              </Message>
              <button type="submit">
                <p>Let's Go</p>
              </button>
            </Form>
          </Content>
        </Article>
      </InnerContent>
    </SectionFiveContainer>
  );
});

export default SectionFive;
