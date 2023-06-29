import React from "react";
import classes from "./App.module.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/Hero/HeroSection";
import data from "./data/data.json";
const App = () => {
  return (
    <main className={classes.main}>
      <Navbar />
      <HeroSection textData={data} />
    </main>
  );
};

export default App;
