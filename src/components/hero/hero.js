import React, { useState } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import styles from "./hero.module.css";

import Header from "../header";

const Hero = ({ text }) => {
  const [toggle, setToggle] = useState(true);
  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(text.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 10,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 10, height: 0 }
  });

  return (
    <div className={styles.heroContainer}>
      <Header />
      <div onClick={() => setToggle(!toggle)} className={styles.textContainer}>
        {/*
          Here we map over the trail which essentially gives us x items of animation, x is the length we pass useTrail
          Each item is a spring which is essentially attached to previous so they are fired one after another
        */}
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.h1
            key={text[index]}
            className={styles.nameText}
            style={{
              ...rest,
              height,
              transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)
            }}
          >
            {text[index]}
          </animated.h1>
        ))}
      </div>
    </div>
  );
};

export default Hero;
