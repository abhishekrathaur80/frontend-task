import React from "react";
import classes from "./Orbit.module.css";

const Orbit = () => {
  return (
    <div className={classes.orbits}>
      <div className={classes.orbit1}>
        <div className={classes.orbit1_T1}>
          <img src={require("../../../assets/gta.png")} alt="gtaTile" />{" "}
        </div>
      </div>
      <div className={classes.orbit2}>
        <div className={classes.orbit2_T1}>
          <img
            src={require("../../../assets/giftCard.png")}
            alt="giftCardTile"
          />{" "}
        </div>
        <div className={classes.orbit2_T2}>
          <img src={require("../../../assets/batman.png")} alt="batmanTile" />{" "}
        </div>
      </div>
      <div className={classes.orbit3}>
        <div className={classes.orbit3_T1}>
          <img
            src={require("../../../assets/mortalCombat.png")}
            alt="mortalCombatTile"
          />{" "}
        </div>

        <div className={classes.orbit3_T2}>
          <img
            src={require("../../../assets/player.png")}
            alt="fifaPlayerTile"
          />{" "}
        </div>
        <div className={classes.orbit3_T3}>
          <img src={require("../../../assets/blocks.png")} alt="blocksTile" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Orbit;
