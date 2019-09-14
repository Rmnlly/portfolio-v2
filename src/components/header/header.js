import React from "react";
import styles from "./header.module.css";

const navItems = ["Projects", "About", "Contact", "Resume"];

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <ul className={styles.mainNav}>
        {navItems.map(el => (
          <li>
            <a href={`#${el}`}>{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
