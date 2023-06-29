import React from "react";
import classes from "./HeroSection.module.css";
import Orbit from "./Orbit/Orbit";
import HeroContent from "./HeroContent/HeroContent";

const HeroSection = (props) => {
  return (
    <section className={classes.hero}>
      <Orbit />
      <span className={classes.backgroundGradient}></span>
      <HeroContent data={props.textData} />
    </section>
  );
};

export default HeroSection;
