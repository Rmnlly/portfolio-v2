import React from "react";
import styles from "./home.module.css";

import Hero from "../hero";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero text={"Raman Lally - Front End Developer"} />
    </div>
  );
};

export default Home;
