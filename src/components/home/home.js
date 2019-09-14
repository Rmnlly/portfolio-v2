import React from "react";
import styles from "./home.module.css";

import Header from "../header";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
};

export default Home;
