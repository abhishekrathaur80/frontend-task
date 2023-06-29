import React from "react";
import classes from "./HeroContent.module.css";
import Button from "../../Button";
import { ReactComponent as Arrow } from "../../../assets/arrow-right.svg";

const HeroContent = (props) => {
  return (
    <div className={classes.heroContentWrapper}>
      <div className={classes.heroContent}>
        <h1 className={classes.heroHeading}>
          Driffle is a {" "}
          <span className={classes.colorHeroText}>
            one-stop shop{" "}
          </span>
          for all your gaming needs.
        </h1>
        <p className={classes.heroSubHeading}>{props.data.heroContent}</p>
        <div>
          <Button type="button" className={classes.heroButton}>
            <p className={classes.heroButtonText}>Visit our store</p>
            <span className={classes.heroButtonArrow}>
              <Arrow />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
