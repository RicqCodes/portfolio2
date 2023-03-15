import React from "react";

import SectionOne from "./section/SectionOne";
import SectionTwo from "./section/SectionTwo";
import SectionThree from "./section/SectionThree";
import SectionFour from "./section/SectionFour";
import SectionFive from "./section/SectionFive";
import Nav from "../Nav";
import Header from "../../layout/molecules/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
};

export default Home;
