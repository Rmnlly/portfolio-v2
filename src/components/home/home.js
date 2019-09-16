import React from "react";
import styles from "./home.module.css";

import Header from "../header";
import Hero from "../hero";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Hero text={"Raman Lally - Front End Developer"} />
    </div>
  );
};

export default Home;
