import React from "react";
import classes from "./Navbar.module.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Button from "./Button";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as Favourite } from "../assets/favourite.svg";
import { ReactComponent as Cart } from "../assets/store.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navBar}>
        <div>
          <Logo className={classes.logo} role="img" />
        </div>
        <div className={classes.menu}>
          <Button className={classes.country} type="button">
            <Globe role="img" />
            <p className={classes.countryTxt}>India (English) &#x2023; INR</p>
          </Button>

          <Button className={classes.iconButton} type="button">
            <Favourite role="img" />
          </Button>

          <Button className={classes.iconButton} type="button">
            <div className={classes.cart}>
              <Cart role="img" />
              <div className={classes.cartItems}>2</div>
            </div>
          </Button>
          <Button className={classes.iconButton} type="button">
            <Profile role="img" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
