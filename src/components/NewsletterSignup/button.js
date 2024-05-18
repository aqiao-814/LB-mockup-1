import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

import styles from "./NewsletterSignup.module.css";

const AnimeButton = ({ onClick, type }) => {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });

  return (
    <div className={styles.container}>
      <div
        ref={ref}
        className={styles.main}
        onClick={() => {
          toggle(!open);
          onClick();
        }}
      >
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>Subscribe</animated.div>
      </div>
    </div>
  );
};
export default AnimeButton;
